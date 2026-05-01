<script setup lang="ts">
import draggable from "vuedraggable";
import { jsPDF } from "jspdf";

const route = useRoute();
const store = useProjects();
onMounted(() => store.hydrate());

const project = computed(() => store.byId(route.params.id as string));

const code = ref("");
const hexOverride = ref("");
const hint = ref("");

const detectedHex = computed(() => {
  const c = code.value.trim();
  if (!c) return "";
  const found = lookupColor(c);
  if (found) return found;
  if (isValidHex(c)) return normalizeHex(c);
  return "";
});

function add() {
  if (!project.value) return;
  const c = normalizeCode(code.value);
  if (!c) return;
  let hex = detectedHex.value;
  if (hexOverride.value && isValidHex(hexOverride.value))
    hex = normalizeHex(hexOverride.value);
  if (!hex) {
    hint.value = "Code unbekannt – bitte Hex-Farbe angeben.";
    return;
  }
  store.addColor(project.value.id, c, hex);
  code.value = "";
  hexOverride.value = "";
  hint.value = "";
}

function remove(id: string) {
  if (!project.value) return;
  store.removeColor(project.value.id, id);
}

const colorsModel = computed({
  get: () => project.value?.colors ?? [],
  set: (val) => project.value && store.setColors(project.value.id, val),
});

function autoSort(dir: "light-to-dark" | "dark-to-light") {
  if (!project.value) return;
  store.sortByBrightness(project.value.id, dir);
}

const background = computed({
  get: () => project.value?.background ?? "#fafaf7",
  set: (val: string) =>
    project.value && store.setBackground(project.value.id, val),
});

const showPdfDialog = ref(false);
const pdfWithBackground = ref(true);

function openPdfDialog() {
  pdfWithBackground.value = true;
  showPdfDialog.value = true;
}

function exportPdf() {
  if (!project.value) return;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 15;
  const cols = 4;
  const gap = 6;
  const cellW = (pageW - margin * 2 - gap * (cols - 1)) / cols;
  const swatchH = 18;
  const labelH = 8;
  const rowH = swatchH + labelH + gap;

  const drawBackground = () => {
    if (!pdfWithBackground.value) return;
    const bg = hexToRgb(background.value);
    doc.setFillColor(bg.r, bg.g, bg.b);
    doc.rect(0, 0, pageW, pageH, "F");
  };
  drawBackground();

  const labelColor = pdfWithBackground.value
    ? hexToRgb(contrastText(background.value))
    : { r: 0, g: 0, b: 0 };

  doc.setFontSize(20);
  doc.setTextColor(labelColor.r, labelColor.g, labelColor.b);
  doc.text(project.value.name, margin, margin - 2);
  let x = margin;
  let y = margin + 6;
  let col = 0;

  for (const c of project.value.colors) {
    if (y + rowH > pageH - margin) {
      doc.addPage();
      drawBackground();
      y = margin;
      x = margin;
      col = 0;
    }
    const rgb = hexToRgb(c.hex);
    doc.setFillColor(rgb.r, rgb.g, rgb.b);
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.rect(x, y, cellW, swatchH, "FD");
    doc.setFontSize(11);
    doc.setTextColor(labelColor.r, labelColor.g, labelColor.b);
    doc.text(c.code, x + cellW / 2, y + swatchH + 5, { align: "center" });

    col++;
    if (col >= cols) {
      col = 0;
      x = margin;
      y += rowH;
    } else {
      x += cellW + gap;
    }
  }
  doc.save(`${project.value.name}.pdf`);
  showPdfDialog.value = false;
}

function hexToRgb(hex: string) {
  let v = hex.replace("#", "");
  if (v.length === 3)
    v = v
      .split("")
      .map((c) => c + c)
      .join("");
  return {
    r: parseInt(v.slice(0, 2), 16),
    g: parseInt(v.slice(2, 4), 16),
    b: parseInt(v.slice(4, 6), 16),
  };
}

const editingName = ref(false);
const nameDraft = ref("");
const nameInput = ref<HTMLInputElement | null>(null);

function startRename() {
  if (!project.value) return;
  nameDraft.value = project.value.name;
  editingName.value = true;
  nextTick(() => nameInput.value?.select());
}

function commitRename() {
  if (!project.value || !editingName.value) return;
  const next = nameDraft.value.trim();
  if (next && next !== project.value.name) {
    store.renameProject(project.value.id, next);
  }
  editingName.value = false;
}

function cancelRename() {
  editingName.value = false;
}
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen transition-colors"
    :style="{ background: background, color: contrastText(background) }"
  >
    <div class="max-w-5xl mx-auto p-6">
      <header class="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div class="min-w-0">
          <NuxtLink to="/" class="text-xs underline opacity-70"
            >← Projekte</NuxtLink
          >
          <div v-if="!editingName" class="flex items-center gap-2">
            <h1 class="text-3xl truncate">{{ project.name }}</h1>
            <button
              class="text-xs px-2 py-1 border border-black rounded hover:bg-neutral-100"
              title="Umbenennen"
              @click="startRename"
            >
              Umbenennen
            </button>
          </div>
          <input
            v-else
            ref="nameInput"
            v-model="nameDraft"
            class="text-3xl border-2 border-black rounded px-2 py-1 bg-white outline-none"
            @keydown.enter="commitRename"
            @keydown.esc="cancelRename"
            @blur="commitRename"
          />
        </div>
        <div class="flex gap-2 items-center flex-wrap">
          <label
            class="flex items-center gap-2 text-sm border-2 border-black rounded px-2 py-1 bg-white text-black cursor-pointer"
            title="Hintergrundfarbe wählen"
          >
            <span>Hintergrund</span>
            <input
              type="color"
              :value="background"
              class="w-8 h-6 border-0 bg-transparent cursor-pointer"
              @input="background = ($event.target as HTMLInputElement).value"
            />
            <button
              type="button"
              class="text-xs underline"
              title="Zurücksetzen"
              @click.stop="background = '#fafaf7'"
            >
              Reset
            </button>
          </label>
          <button
            class="text-sm border-2 border-black rounded px-3 py-1 bg-white text-black hover:bg-neutral-100"
            @click="autoSort('light-to-dark')"
          >
            Hell → Dunkel
          </button>
          <button
            class="text-sm border-2 border-black rounded px-3 py-1 bg-white text-black hover:bg-neutral-100"
            @click="autoSort('dark-to-light')"
          >
            Dunkel → Hell
          </button>
          <button
            class="text-sm border-2 border-black rounded px-3 py-1 bg-black text-white"
            @click="openPdfDialog"
          >
            PDF Export
          </button>
        </div>
      </header>

      <section
        class="mb-6 border-2 border-black rounded bg-white text-black p-4"
      >
        <form class="flex flex-wrap gap-2 items-end" @submit.prevent="add">
          <div class="flex flex-col">
            <label class="text-xs opacity-70"
              >Farbcode (z. B. Y02, RV05 oder #ff8800)</label
            >
            <input
              v-model="code"
              class="border-2 border-black rounded px-3 py-2 w-56 bg-white outline-none"
              placeholder="Code …"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-xs opacity-70"
              >Hex überschreiben (optional)</label
            >
            <input
              v-model="hexOverride"
              class="border-2 border-black rounded px-3 py-2 w-40 bg-white outline-none"
              placeholder="#aabbcc"
            />
          </div>
          <div
            class="w-12 h-12 swatch"
            :style="{
              background:
                detectedHex ||
                (hexOverride && isValidHex(hexOverride)
                  ? normalizeHex(hexOverride)
                  : '#eee'),
            }"
            :title="detectedHex || hexOverride"
          />
          <button
            type="submit"
            class="border-2 border-black rounded px-4 py-2 bg-black text-white"
          >
            Hinzufügen
          </button>
          <span v-if="hint" class="text-xs text-red-600">{{ hint }}</span>
        </form>
      </section>

      <section>
        <p v-if="!project.colors.length" class="opacity-60 text-sm">
          Noch keine Farben.
        </p>
        <draggable
          v-model="colorsModel"
          item-key="id"
          :animation="180"
          ghost-class="opacity-40"
          class="grid gap-4"
          :style="{
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          }"
        >
          <template #item="{ element }">
            <div
              class="flex flex-col items-center group cursor-grab select-none"
            >
              <div
                class="swatch w-full h-16 relative"
                :style="{ background: element.hex }"
              >
                <button
                  class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-black text-xs opacity-0 group-hover:opacity-100"
                  title="Löschen"
                  @click.stop="remove(element.id)"
                >
                  ×
                </button>
              </div>
              <div class="mt-1 text-lg tracking-wide">{{ element.code }}</div>
            </div>
          </template>
        </draggable>
      </section>
    </div>

    <Teleport to="body">
      <div
        v-if="showPdfDialog"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        @click.self="showPdfDialog = false"
      >
        <div
          class="bg-white text-black border-2 border-black rounded p-6 w-[90%] max-w-md"
        >
          <h2 class="text-2xl mb-4">PDF Export</h2>
          <label class="flex items-center gap-2 mb-2 cursor-pointer">
            <input
              v-model="pdfWithBackground"
              type="checkbox"
              class="w-4 h-4"
            />
            <span>Hintergrundfarbe übernehmen</span>
            <span
              class="inline-block w-5 h-5 border border-black rounded"
              :style="{ background: background }"
            />
          </label>
          <p class="text-xs opacity-70 mb-6">Aktuell: {{ background }}</p>
          <div class="flex justify-end gap-2">
            <button
              class="text-sm border-2 border-black rounded px-3 py-1 bg-white hover:bg-neutral-100"
              @click="showPdfDialog = false"
            >
              Abbrechen
            </button>
            <button
              class="text-sm border-2 border-black rounded px-3 py-1 bg-black text-white"
              @click="exportPdf"
            >
              Exportieren
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
  <div v-else class="p-10 text-center">
    <p class="opacity-70">Projekt nicht gefunden.</p>
    <NuxtLink to="/" class="underline">Zurück</NuxtLink>
  </div>
</template>
