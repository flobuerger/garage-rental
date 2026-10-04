<script setup lang="ts">
const { ready, panelOpen, save, load } = useConsent()

onMounted(load)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="ready && panelOpen"
      class="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
    >
      <div class="mx-auto max-w-3xl rounded-xl border border-ink-900/10 bg-white p-5 shadow-2xl sm:p-6">
        <h2 class="font-heading text-base font-bold text-ink-900">Cookies &amp; externe Inhalte</h2>
        <p class="mt-2 text-sm leading-relaxed text-ink-600">
          Diese Website verwendet nur technisch notwendige Speichertechniken (z.&nbsp;B. um deine Auswahl
          hier zu merken). Die Karte im Bereich „Lageplan“ wird von OpenStreetMap geladen; dabei wird
          deine IP-Adresse an den Kartenanbieter übermittelt. Das passiert nur mit deiner Einwilligung.
          Mehr dazu in der
          <NuxtLink to="/datenschutz" class="text-brand-600 underline hover:no-underline">Datenschutzerklärung</NuxtLink>.
        </p>
        <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" class="btn-secondary" @click="save('necessary')">
            Nur notwendige
          </button>
          <button type="button" class="btn-primary" @click="save('all')">
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
