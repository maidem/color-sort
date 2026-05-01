// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-01",
  devtools: { enabled: true },
  ssr: false,
  // Workaround für Nuxt 4.4.4 SPA dev-server bug
  // (https://github.com/nuxt/nuxt/issues/34957)
  experimental: {
    viteEnvironmentApi: true,
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Color Sort",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  nitro: {
    preset: "node-server",
  },
});
