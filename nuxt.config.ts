// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-vitest',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  }
})
