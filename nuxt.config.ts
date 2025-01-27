// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  router: {
    middleware: ["auth"],
  },
  components: true,
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      title: "eoffice",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
  ],

  runtimeConfig: {
    public: {
      axios: {
        baseURL: "http://127.0.0.1:8000/api/",
      },
    },
  },
});
