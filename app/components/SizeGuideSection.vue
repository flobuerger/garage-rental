<script setup lang="ts">
const sizes = [
  {
    name: 'Einzelgarage',
    range: '14–16 m²',
    desc: 'Der Klassiker für Kleinwagen, Motorrad oder als zusätzlicher Stauraum.',
    fits: ['Kleinwagen oder Motorrad', 'Reifen- und Saisonlager', 'Werkzeug & Kartons'],
  },
  {
    name: 'Doppelgarage',
    range: '18–20 m²',
    desc: 'Unsere meistgemietete Größe — passt für die meisten PKW bequem.',
    fits: ['Mittelklasse-PKW', 'Fahrrad & Anhänger', 'Regale für Lagerung'],
  },
  {
    name: 'Garage XL',
    range: '24–28 m²',
    desc: 'Viel Platz für SUV, Wohnmobil-Zubehör, Boot oder Werkstattbetrieb.',
    fits: ['SUV oder Transporter', 'Boot- oder Wohnwagenzubehör', 'Werkstatt-Einrichtung'],
  },
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">01</span> Größenübersicht</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Finde die passende Größe
      </h2>
      <p class="mt-4 text-ink-500">
        Von der kompakten Einzelgarage bis zur XL-Variante für SUV und Boot —
        drei Größen für jeden Bedarf.
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div v-for="size in sizes" :key="size.name" class="flex flex-col rounded-lg border border-ink-900/10 p-7">
        <h3 class="font-heading text-lg font-bold text-ink-900">{{ size.name }}</h3>
        <p class="mt-1 text-sm font-semibold text-brand-600">{{ size.range }}</p>
        <p class="mt-3 text-sm leading-relaxed text-ink-500">{{ size.desc }}</p>

        <p class="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-400">Was reinpasst</p>
        <ul class="mt-3 flex-1 space-y-2.5">
          <li v-for="item in size.fits" :key="item" class="flex items-start gap-2.5 text-sm text-ink-700">
            <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {{ item }}
          </li>
        </ul>

        <NuxtLink to="/preise" class="mt-7 text-sm font-semibold text-ink-900 underline hover:no-underline">
          Preis ansehen →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
