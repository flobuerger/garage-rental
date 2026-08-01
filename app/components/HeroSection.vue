<script setup lang="ts">
const stats = [
  { value: '120+', label: 'Stellplätze' },
  { value: '24/7', label: 'Zufahrt' },
  { value: '100%', label: 'Videoüberwacht' },
]
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <video
      class="absolute inset-0 h-full w-full object-cover opacity-40"
      autoplay
      muted
      loop
      playsinline
      poster="/images/garage-05.svg"
    >
      <source src="/videos/hero-loop.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-white" />
    <div
      class="absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-brand-300"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand-400" />
          Jetzt Stellplätze frei — sofort verfügbar
        </span>

        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Deine Garage.<br class="hidden sm:block" />
          <span class="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Sicher untergebracht.
          </span>
        </h1>

        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
          Trockene, videoüberwachte Garagenstellplätze in Musterort — verschiedene
          Größen, ebenerdige Zufahrt und flexible Laufzeiten. In wenigen Minuten
          angefragt.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/preise"
            class="w-full rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-brand-400 sm:w-auto"
          >
            Preise ansehen
          </NuxtLink>
          <NuxtLink
            to="/#lageplan"
            class="w-full rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            Lageplan entdecken
          </NuxtLink>
        </div>
      </div>

      <div class="glass-panel-frosted mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-ink-900/8 px-2 py-6">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-2xl font-extrabold text-ink-900 sm:text-3xl">{{ stat.value }}</p>
          <p class="mt-1 text-xs font-medium uppercase tracking-wide text-ink-500">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
