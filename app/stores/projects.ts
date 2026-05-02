import { defineStore } from "pinia";

export interface ColorEntry {
  id: string;
  code: string;
  hex: string;
}

export interface Project {
  id: string;
  name: string;
  createdAt: number;
  colors: ColorEntry[];
  background?: string;
}

const LEGACY_KEY = "color-sort:projects:v1";

function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export const useProjects = defineStore("projects", {
  state: () => ({
    projects: [] as Project[],
    loaded: false,
  }),
  getters: {
    byId: (state) => (id: string) => state.projects.find((p) => p.id === id),
  },
  actions: {
    async hydrate() {
      if (this.loaded) return;
      this.projects = await $fetch<Project[]>("/api/projects");

      // One-time migration: import existing localStorage data to the server
      if (this.projects.length === 0 && typeof localStorage !== "undefined") {
        try {
          const raw = localStorage.getItem(LEGACY_KEY);
          if (raw) {
            const local = JSON.parse(raw) as Project[];
            for (const p of local) {
              await $fetch("/api/projects", { method: "POST", body: p });
            }
            this.projects = local;
            localStorage.removeItem(LEGACY_KEY);
          }
        } catch {
          // ignore migration errors
        }
      }

      this.loaded = true;
    },
    _save(project: Project) {
      $fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        body: project,
      });
    },
    createProject(name: string): Project {
      const p: Project = {
        id: uid(),
        name: name.trim() || "Unbenannt",
        createdAt: Date.now(),
        colors: [],
        background: "#fafaf7",
      };
      this.projects.unshift(p);
      $fetch("/api/projects", { method: "POST", body: p });
      return p;
    },
    setBackground(projectId: string, hex: string) {
      const p = this.byId(projectId);
      if (!p) return;
      p.background = hex;
      this._save(p);
    },
    renameProject(id: string, name: string) {
      const p = this.byId(id);
      if (!p) return;
      p.name = name.trim() || p.name;
      this._save(p);
    },
    deleteProject(id: string) {
      this.projects = this.projects.filter((p) => p.id !== id);
      $fetch(`/api/projects/${id}`, { method: "DELETE" });
    },
    addColor(projectId: string, code: string, hex: string) {
      const p = this.byId(projectId);
      if (!p) return;
      p.colors.push({ id: uid(), code, hex });
      this._save(p);
    },
    removeColor(projectId: string, colorId: string) {
      const p = this.byId(projectId);
      if (!p) return;
      p.colors = p.colors.filter((c) => c.id !== colorId);
      this._save(p);
    },
    setColors(projectId: string, colors: ColorEntry[]) {
      const p = this.byId(projectId);
      if (!p) return;
      p.colors = colors;
      this._save(p);
    },
    sortByBrightness(
      projectId: string,
      direction: "light-to-dark" | "dark-to-light" = "light-to-dark",
    ) {
      const p = this.byId(projectId);
      if (!p) return;
      const sorted = [...p.colors].sort(
        (a, b) => brightness(b.hex) - brightness(a.hex),
      );
      if (direction === "dark-to-light") sorted.reverse();
      p.colors = sorted;
      this._save(p);
    },
  },
});
