<script setup lang="ts">
const facts = [
  { label: 'Innenmaße [L×B×H]', value: '5,84 × 2,84 × 2,14 m' },
  { label: 'Fläche', value: 'ca. 16,5 m²' },
  { label: 'Stromanschluss', value: 'Eigener Subzähler je Garage' },
  { label: 'Steckdosen', value: '3 je Garage' },
  { label: 'Beleuchtung', value: 'LED-Lampe mit Lichtschalter' },
]

const rental = [
  { label: 'Mietverhältnis', value: 'Unbestimmte Dauer' },
  { label: 'Mindestmietdauer', value: '1 Jahr' },
  { label: 'Kündigungsfrist', value: '3 Monate zum Quartalsende' },
  { label: 'Kürzere Mietdauer', value: 'Auf Anfrage gegen Aufpreis möglich' },
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">01</span> Die Garage</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Einzelgarage
      </h2>
      <p class="mt-4 text-ink-500">
        Eine einheitliche Größe für alle Stellplätze — durchdacht ausgestattet
        und fair kalkuliert.
      </p>
    </div>

    <div class="mt-14 overflow-hidden rounded-lg border border-ink-900/10">
      <div class="bg-ink-900 px-7 py-6 sm:px-10">
        <p class="text-xs font-semibold uppercase tracking-wide text-brand-400">Einzelgarage</p>
        <p class="mt-1 font-heading text-3xl font-bold text-white">
          € 149,00 <span class="text-base font-medium text-ink-300">mtl. inkl. Betriebskosten</span>
        </p>
      </div>

      <div class="grid grid-cols-1 gap-x-10 gap-y-8 bg-white p-7 sm:grid-cols-2 sm:p-10">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-ink-400">Eckdaten</p>
          <dl class="mt-4 space-y-3">
            <div v-for="fact in facts" :key="fact.label" class="flex items-start justify-between gap-4 text-sm">
              <dt class="text-ink-500">{{ fact.label }}</dt>
              <dd class="text-right font-medium text-ink-900">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-wide text-ink-400">Mietverhältnis</p>
          <dl class="mt-4 space-y-3">
            <div v-for="item in rental" :key="item.label" class="flex items-start justify-between gap-4 text-sm">
              <dt class="text-ink-500">{{ item.label }}</dt>
              <dd class="text-right font-medium text-ink-900">{{ item.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="border-t border-ink-900/8 bg-ink-50 px-7 py-6 sm:px-10">
        <NuxtLink to="/preise" class="text-sm font-semibold text-ink-900 underline hover:no-underline">
          Alle Kosten im Detail ansehen →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
