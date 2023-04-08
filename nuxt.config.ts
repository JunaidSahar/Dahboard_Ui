export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  app: {
    head: {
      title: "Al Baseer",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Al Baseer",
        }
      ],
    }
  },
  ssr: false,
  typescript: {
    shim: false
  },
  build: {
    transpile: ["vuetify", "@pinia/nuxt"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  hooks: {
  },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  // modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['@/assets/css/tailwind.css'],
})