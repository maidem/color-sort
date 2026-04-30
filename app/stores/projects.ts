import { defineStore } from 'pinia'

export interface ColorEntry {
  id: string
  code: string
  hex: string
}

export interface Project {
  id: string
  name: string
  createdAt: number
  colors: ColorEntry[]
  background?: string
}

const STORAGE_KEY = 'color-sort:projects:v1'

function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36)
}

function load(): Project[] {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as Project[]
  } catch {
    return []
  }
}

export const useProjects = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    loaded: false
  }),
  getters: {
    byId: (state) => (id: string) => state.projects.find(p => p.id === id)
  },
  actions: {
    hydrate() {
      if (this.loaded) return
      this.projects = load()
      this.loaded = true
    },
    persist() {
      if (typeof localStorage === 'undefined') return
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.projects))
    },
    createProject(name: string): Project {
      const p: Project = { id: uid(), name: name.trim() || 'Unbenannt', createdAt: Date.now(), colors: [], background: '#fafaf7' }
      this.projects.unshift(p)
      this.persist()
      return p
    },
    setBackground(projectId: string, hex: string) {
      const p = this.byId(projectId); if (!p) return
      p.background = hex
      this.persist()
    },
    renameProject(id: string, name: string) {
      const p = this.byId(id); if (!p) return
      p.name = name.trim() || p.name
      this.persist()
    },
    deleteProject(id: string) {
      this.projects = this.projects.filter(p => p.id !== id)
      this.persist()
    },
    addColor(projectId: string, code: string, hex: string) {
      const p = this.byId(projectId); if (!p) return
      p.colors.push({ id: uid(), code, hex })
      this.persist()
    },
    removeColor(projectId: string, colorId: string) {
      const p = this.byId(projectId); if (!p) return
      p.colors = p.colors.filter(c => c.id !== colorId)
      this.persist()
    },
    setColors(projectId: string, colors: ColorEntry[]) {
      const p = this.byId(projectId); if (!p) return
      p.colors = colors
      this.persist()
    },
    sortByBrightness(projectId: string, direction: 'light-to-dark' | 'dark-to-light' = 'light-to-dark') {
      const p = this.byId(projectId); if (!p) return
      const sorted = [...p.colors].sort((a, b) => brightness(b.hex) - brightness(a.hex))
      if (direction === 'dark-to-light') sorted.reverse()
      p.colors = sorted
      this.persist()
    }
  }
})
