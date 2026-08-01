import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-27',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Garagenpark Musterort — Garagen mieten',
      htmlAttrs: { lang: 'de' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Garagen zur Miete in Musterort — sicher, trocken, videoüberwacht. Verschiedene Größen, faire Preise, sofort verfügbar.',
        },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
})
