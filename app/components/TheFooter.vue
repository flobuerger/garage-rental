<script setup lang="ts">
const year = new Date().getFullYear()
const { reopen } = useConsent()
</script>

<template>
  <footer class="border-t border-ink-900/8 bg-ink-50">

    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5">
            <span class="flex h-9 w-9 items-center justify-center rounded-md bg-ink-900">
              <svg viewBox="0 0 24 24" class="h-4.5 w-4.5 text-brand-500" fill="currentColor">
                <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11.2Z" />
              </svg>
            </span>
            <span class="font-heading text-sm font-bold uppercase tracking-[0.1em] text-ink-900">garagen-reich</span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
            Zur Miete in Marchtrenk. Einheitliche Größe, faire Miete inklusive Betriebskosten —
            unkompliziert online reservieren.
          </p>

          <div class="mt-6 flex items-start gap-2 text-sm text-ink-600">
            <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Roseggerstraße, 4614 Marchtrenk</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink-900">Navigation</h3>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500">
            <li><NuxtLink to="/" class="hover:text-ink-900">Startseite</NuxtLink></li>
            <li><NuxtLink to="/#lageplan" class="hover:text-ink-900">Lageplan</NuxtLink></li>
            <li><NuxtLink to="/preise" class="hover:text-ink-900">Preise</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink-900">Kontakt</h3>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500">
            <li>Roseggerstraße, 4614 Marchtrenk</li>
            <li>
              <a href="tel:+4367763475223" class="hover:text-ink-900">+43 677 63475223</a>
            </li>
            <li>
              <a href="mailto:office@garagen-reich.at" class="hover:text-ink-900">
                office@garagen-reich.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 pt-8 text-xs text-ink-500 sm:flex-row">
        <p>&copy; {{ year }} garagen-reich. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <NuxtLink to="/impressum" class="hover:text-ink-900">Impressum</NuxtLink>
          <NuxtLink to="/agb" class="hover:text-ink-900">AGB</NuxtLink>
          <NuxtLink to="/datenschutz" class="hover:text-ink-900">Datenschutz</NuxtLink>
          <button type="button" class="hover:text-ink-900" @click="reopen">Cookie-Einstellungen</button>
        </div>
      </div>
    </div>
  </footer>
</template>
