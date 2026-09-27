import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-27',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Garagenpark Marchtrenk — Garagen mieten',
      htmlAttrs: { lang: 'de' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Einzelgarage zur Miete in Marchtrenk — sicher, trocken, videoüberwacht, Zufahrt durch Schranken gesichert. Sofort verfügbar.',
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
