<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink-900/8 bg-ink-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5">
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600">
              <svg viewBox="0 0 24 24" class="h-5 w-5 text-ink-950" fill="currentColor">
                <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11.2Z" />
              </svg>
            </span>
            <span class="text-lg font-bold text-ink-900">Garagenpark Musterort</span>
          </div>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
            Sichere, trockene und videoüberwachte Garagen zur Miete in Musterort.
            Verschiedene Größen, faire Preise, unkompliziert und flexibel.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink-900">Navigation</h3>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500">
            <li><NuxtLink to="/" class="hover:text-brand-600">Startseite</NuxtLink></li>
            <li><NuxtLink to="/#galerie" class="hover:text-brand-600">Galerie</NuxtLink></li>
            <li><NuxtLink to="/#lageplan" class="hover:text-brand-600">Lageplan</NuxtLink></li>
            <li><NuxtLink to="/preise" class="hover:text-brand-600">Preise</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-ink-900">Kontakt</h3>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500">
            <li>Musterstraße 12, 4020 Musterort</li>
            <li>
              <a href="tel:+43000000000" class="hover:text-brand-600">+43 000 000 000</a>
            </li>
            <li>
              <a href="mailto:info@garagenpark-musterort.at" class="hover:text-brand-600">
                info@garagenpark-musterort.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 pt-8 text-xs text-ink-500 sm:flex-row">
        <p>&copy; {{ year }} Garagenpark Musterort. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <NuxtLink to="/impressum" class="hover:text-brand-600">Impressum</NuxtLink>
          <NuxtLink to="/agb" class="hover:text-brand-600">AGB</NuxtLink>
          <NuxtLink to="/datenschutz" class="hover:text-brand-600">Datenschutz</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
