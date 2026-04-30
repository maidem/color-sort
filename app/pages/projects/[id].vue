<script setup lang="ts">
import draggable from 'vuedraggable'
import { jsPDF } from 'jspdf'

const route = useRoute()
const store = useProjects()
onMounted(() => store.hydrate())

const project = computed(() => store.byId(route.params.id as string))

const code = ref('')
const hexOverride = ref('')
const hint = ref('')

const detectedHex = computed(() => {
  const c = code.value.trim()
  if (!c) return ''
  const found = lookupColor(c)
  if (found) return found
  if (isValidHex(c)) return normalizeHex(c)
  return ''
})

function add() {
  if (!project.value) return
  const c = normalizeCode(code.value)
  if (!c) return
  let hex = detectedHex.value
  if (hexOverride.value && isValidHex(hexOverride.value)) hex = normalizeHex(hexOverride.value)
  if (!hex) {
    hint.value = 'Code unbekannt – bitte Hex-Farbe angeben.'
    return
  }
  store.addColor(project.value.id, c, hex)
  code.value = ''
  hexOverride.value = ''
  hint.value = ''
}

function remove(id: string) {
  if (!project.value) return
  store.removeColor(project.value.id, id)
}

const colorsModel = computed({
  get: () => project.value?.colors ?? [],
  set: (val) => project.value && store.setColors(project.value.id, val)
})

function autoSort(dir: 'light-to-dark' | 'dark-to-light') {
  if (!project.value) return
  store.sortByBrightness(project.value.id, dir)
}

function exportPdf() {
  if (!project.value) return
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()
  const margin = 15
  const cols = 4
  const gap = 6
  const cellW = (pageW - margin * 2 - gap * (cols - 1)) / cols
  const swatchH = 18
  const labelH = 8
  const rowH = swatchH + labelH + gap

  doc.setFontSize(20)
  doc.text(project.value.name, margin, margin - 2)
  let x = margin
  let y = margin + 6
  let col = 0

  for (const c of project.value.colors) {
    if (y + rowH > pageH - margin) {
      doc.addPage()
      y = margin
      x = margin
      col = 0
    }
    const rgb = hexToRgb(c.hex)
    doc.setFillColor(rgb.r, rgb.g, rgb.b)
    doc.setDrawColor(0)
    doc.setLineWidth(0.5)
    doc.rect(x, y, cellW, swatchH, 'FD')
    doc.setFontSize(11)
    doc.setTextColor(0)
    doc.text(c.code, x + cellW / 2, y + swatchH + 5, { align: 'center' })

    col++
    if (col >= cols) {
      col = 0
      x = margin
      y += rowH
    } else {
      x += cellW + gap
    }
  }
  doc.save(`${project.value.name}.pdf`)
}

function hexToRgb(hex: string) {
  const v = hex.replace('#', '')
  return {
    r: parseInt(v.slice(0, 2), 16),
    g: parseInt(v.slice(2, 4), 16),
    b: parseInt(v.slice(4, 6), 16)
  }
}
</script>

<template>
  <div v-if="project" class="max-w-5xl mx-auto p-6">
    <header class="flex items-center justify-between mb-6">
      <div>
        <NuxtLink to="/" class="text-xs underline opacity-70">← Projekte</NuxtLink>
        <h1 class="text-3xl">{{ project.name }}</h1>
      </div>
      <div class="flex gap-2">
        <button
          class="text-sm border-2 border-black rounded px-3 py-1 bg-white hover:bg-neutral-100"
          @click="autoSort('light-to-dark')"
        >Hell → Dunkel</button>
        <button
          class="text-sm border-2 border-black rounded px-3 py-1 bg-white hover:bg-neutral-100"
          @click="autoSort('dark-to-light')"
        >Dunkel → Hell</button>
        <button
          class="text-sm border-2 border-black rounded px-3 py-1 bg-black text-white"
          @click="exportPdf"
        >PDF Export</button>
      </div>
    </header>

    <section class="mb-6 border-2 border-black rounded bg-white p-4">
      <form class="flex flex-wrap gap-2 items-end" @submit.prevent="add">
        <div class="flex flex-col">
          <label class="text-xs opacity-70">Farbcode (z. B. Y02, RV05 oder #ff8800)</label>
          <input
            v-model="code"
            class="border-2 border-black rounded px-3 py-2 w-56 bg-white outline-none"
            placeholder="Code …"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-xs opacity-70">Hex überschreiben (optional)</label>
          <input
            v-model="hexOverride"
            class="border-2 border-black rounded px-3 py-2 w-40 bg-white outline-none"
            placeholder="#aabbcc"
          />
        </div>
        <div
          class="w-12 h-12 swatch"
          :style="{ background: detectedHex || (hexOverride && isValidHex(hexOverride) ? normalizeHex(hexOverride) : '#eee') }"
          :title="detectedHex || hexOverride"
        />
        <button
          type="submit"
          class="border-2 border-black rounded px-4 py-2 bg-black text-white"
        >Hinzufügen</button>
        <span v-if="hint" class="text-xs text-red-600">{{ hint }}</span>
      </form>
    </section>

    <section>
      <p v-if="!project.colors.length" class="opacity-60 text-sm">Noch keine Farben.</p>
      <draggable
        v-model="colorsModel"
        item-key="id"
        :animation="180"
        ghost-class="opacity-40"
        class="grid gap-4"
        :style="{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }"
      >
        <template #item="{ element }">
          <div class="flex flex-col items-center group cursor-grab select-none">
            <div
              class="swatch w-full h-16 relative"
              :style="{ background: element.hex }"
            >
              <button
                class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-black text-xs opacity-0 group-hover:opacity-100"
                title="Löschen"
                @click.stop="remove(element.id)"
              >×</button>
            </div>
            <div class="mt-1 text-lg tracking-wide">{{ element.code }}</div>
          </div>
        </template>
      </draggable>
    </section>
  </div>
  <div v-else class="p-10 text-center">
    <p class="opacity-70">Projekt nicht gefunden.</p>
    <NuxtLink to="/" class="underline">Zurück</NuxtLink>
  </div>
</template>
