<script setup lang="ts">
const features = [
  {
    title: 'Videoüberwachung',
    desc: 'Die gesamte Anlage ist videoüberwacht — für ein sicheres Gefühl rund um die Uhr.',
    icon: 'M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    title: 'Ebenerdige Zufahrt',
    desc: 'Bequemes Ein- und Ausparken ohne Rampen oder enge Kurven.',
    icon: 'M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 104 16.34',
  },
  {
    title: 'Trocken & sauber',
    desc: 'Eine gepflegte, trockene Garage — ideal auch für Motorräder, Reifen oder Lagerung.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    title: 'Fairer Preis',
    desc: 'Transparente Monatsmiete ohne versteckte Kosten.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-2c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Eigener Subzähler',
    desc: 'Die Garage mit eigenem Stromsubzähler — transparent nach Verbrauch abgerechnet.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Ideal fürs E-Auto',
    desc: 'Dank eigenem Subzähler ideal zum Laden für dein E-Auto.',
    icon: 'M11 19H6.931A1.535 1.535 0 015.5 16.8L8 12m3 7v-5m0 5h5.069a1.535 1.535 0 001.431-2.2L15 12m-4 0V8m0 4h4m-4-4H8.5A1.5 1.5 0 017 6.5v0A1.5 1.5 0 018.5 5H11m0 3V5m0 0h3.5A1.5 1.5 0 0116 6.5v0A1.5 1.5 0 0114.5 8H11',
  },
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">02</span> Die Ausstattung</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Alles, was deine Garage braucht
      </h2>
      <p class="mt-4 text-ink-500">
        Durchdacht, sicher und unkompliziert — das steckt in jedem Mietvertrag.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink-900/8 pt-16 sm:grid-cols-3">
      <div v-for="feature in features" :key="feature.title">
        <div class="flex h-10 w-10 items-center justify-center rounded-md bg-ink-900 text-brand-500">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
          </svg>
        </div>
        <h3 class="mt-3.5 text-sm font-semibold text-ink-900">{{ feature.title }}</h3>
        <p class="mt-1.5 text-xs leading-relaxed text-ink-500">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>
