<script setup lang="ts">
const store = useProjects();
onMounted(() => store.hydrate());

const newName = ref("");
function create() {
  const name = newName.value.trim();
  if (!name) return;
  const p = store.createProject(name);
  newName.value = "";
  navigateTo(`/projects/${p.id}`);
}

function remove(id: string) {
  if (confirm("Projekt wirklich löschen?")) store.deleteProject(id);
}

const editingId = ref<string | null>(null);
const editDraft = ref("");

function startRename(id: string, current: string) {
  editingId.value = id;
  editDraft.value = current;
}

function commitRename() {
  if (!editingId.value) return;
  const name = editDraft.value.trim();
  if (name) store.renameProject(editingId.value, name);
  editingId.value = null;
}

function cancelRename() {
  editingId.value = null;
}
</script>

<template>
  <div class="max-w-3xl mx-auto p-4 sm:p-6">
    <header class="mb-8">
      <h1 class="text-3xl sm:text-4xl tracking-wide">Color Sort</h1>
      <p class="text-sm opacity-70">Marker-Farbpaletten verwalten</p>
    </header>

    <section class="mb-8">
      <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="create">
        <input
          v-model="newName"
          placeholder="Neues Projekt …"
          class="flex-1 border-2 border-black rounded px-3 py-2 bg-white outline-none focus:shadow-[1px_1px_0_#111]"
        />
        <button
          type="submit"
          class="border-2 border-black rounded px-4 py-3 sm:py-2 bg-black text-white hover:bg-neutral-800"
        >
          Anlegen
        </button>
      </form>
    </section>

    <section>
      <h2 class="text-xl mb-3">Projekte</h2>
      <p v-if="!store.projects.length" class="opacity-60 text-sm">
        Noch keine Projekte.
      </p>
      <ul class="space-y-2">
        <li
          v-for="p in store.projects"
          :key="p.id"
          class="flex items-center justify-between border-2 border-black rounded px-4 py-3 transition-colors"
          :style="{
            background: p.background || '#ffffff',
            color: contrastText(p.background || '#ffffff'),
          }"
        >
          <template v-if="editingId === p.id">
            <input
              v-model="editDraft"
              autofocus
              class="flex-1 mr-3 text-lg border-2 border-black rounded px-2 py-1 bg-white outline-none"
              @keydown.enter="commitRename"
              @keydown.esc="cancelRename"
              @blur="commitRename"
            />
          </template>
          <NuxtLink
            v-else
            :to="`/projects/${p.id}`"
            class="flex-1 min-w-0 mr-3"
          >
            <div class="text-lg truncate">{{ p.name }}</div>
            <div class="text-xs opacity-60">{{ p.colors.length }} Farben</div>
          </NuxtLink>
          <div class="flex gap-1 items-center shrink-0">
            <div class="hidden sm:flex -space-x-1 mr-3">
              <span
                v-for="c in p.colors.slice(0, 6)"
                :key="c.id"
                class="w-5 h-5 rounded-full border border-black"
                :style="{ background: c.hex }"
              />
            </div>
            <button
              v-if="editingId !== p.id"
              class="text-xs px-2 py-1 border border-black rounded bg-white text-black hover:bg-neutral-100"
              @click="startRename(p.id, p.name)"
            >
              Umbenennen
            </button>
            <button
              class="text-xs px-2 py-1 border border-black rounded bg-white text-black hover:bg-red-100"
              @click="remove(p.id)"
            >
              Löschen
            </button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
