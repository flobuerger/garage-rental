<script setup lang="ts">
const legend = [
  { color: 'bg-brand-500', label: 'frei / verfügbar' },
  { color: 'bg-sky-300', label: 'reserviert' },
  { color: 'bg-ink-700', label: 'vermietet' },
]
</script>

<template>
  <section id="lageplan" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="text-xs font-semibold uppercase tracking-wider text-brand-600">Geländeplan</span>
      <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        Finde deinen Stellplatz
      </h2>
      <p class="mt-4 text-ink-500">
        Der Übersichtsplan zeigt alle Reihen, Zufahrtswege und den aktuellen
        Belegungsstatus auf einen Blick.
      </p>
    </div>

    <div class="mt-12 glass-panel overflow-hidden p-4 sm:p-6">
      <img
        src="/images/lageplan.svg"
        alt="Lage- und Geländeplan der Garagenanlage mit Reihen A, B und C"
        class="w-full rounded-xl"
      />

      <div class="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ink-900/8 pt-6">
        <div v-for="item in legend" :key="item.label" class="flex items-center gap-2 text-sm text-ink-600">
          <span class="h-3 w-3 rounded" :class="item.color" />
          {{ item.label }}
        </div>
      </div>
    </div>

    <p class="mt-4 text-center text-xs text-ink-500">
      Beispielplan, unverbindlich. Aktuelle Verfügbarkeit auf Anfrage.
    </p>
  </section>
</template>
