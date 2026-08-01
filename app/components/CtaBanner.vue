<template>
  <section class="relative overflow-hidden bg-ink-950">
    <div
      class="absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Bereit für deine eigene Garage?
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-ink-300">
        Sichere dir jetzt einen freien Stellplatz — unverbindlich anfragen,
        wir melden uns innerhalb eines Werktags.
      </p>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <NuxtLink
          to="/preise#kontakt"
          class="w-full rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-brand-400 sm:w-auto"
        >
          Jetzt Platz anfragen
        </NuxtLink>
        <NuxtLink
          to="/preise"
          class="w-full rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
        >
          Preise vergleichen
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
