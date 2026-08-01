<script setup lang="ts">
const photos = [
  { src: '/images/garage-01.svg', label: 'Einheit 01 · Einzelgarage', span: 'sm:row-span-2' },
  { src: '/images/garage-02.svg', label: 'Einheit 02 · Doppelgarage', span: '' },
  { src: '/images/garage-03.svg', label: 'Einheit 03 · Einzelgarage', span: '' },
  { src: '/images/garage-04.svg', label: 'Einheit 04 · Doppelgarage', span: '' },
  { src: '/images/garage-05.svg', label: 'Reihe B · Abendstimmung', span: 'sm:row-span-2' },
  { src: '/images/garage-06.svg', label: 'Reihe C · Zufahrt', span: '' },
]
</script>

<template>
  <section id="galerie" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">Impressionen der Anlage</h2>
      <p class="mt-4 text-ink-500">
        Ein Blick auf unsere Garagenreihen. Platzhalterbilder — echte Fotos folgen nach Absprache.
      </p>
    </div>

    <div class="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
      <figure
        v-for="photo in photos"
        :key="photo.src"
        class="group relative overflow-hidden rounded-2xl border border-ink-900/8 shadow-sm"
        :class="photo.span"
      >
        <img
          :src="photo.src"
          :alt="photo.label"
          loading="lazy"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
        <figcaption class="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
          {{ photo.label }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
