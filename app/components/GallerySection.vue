<script setup lang="ts">
const photos = [
  { src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop', label: 'Einheit 01 · Einzelgarage', span: 'sm:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1696992812596-3c0d4d2d1299?q=80&w=800&auto=format&fit=crop', label: 'Einheit 02 · Doppelgarage', span: '' },
  { src: 'https://images.unsplash.com/photo-1617782674367-341cf5f527c9?q=80&w=800&auto=format&fit=crop', label: 'Einheit 03 · Einzelgarage', span: '' },
  { src: 'https://images.unsplash.com/photo-1523809040961-500fcd60697a?q=80&w=800&auto=format&fit=crop', label: 'Einheit 04 · Doppelgarage', span: '' },
  { src: 'https://images.unsplash.com/photo-1541737949652-27149c8e786d?q=80&w=1000&auto=format&fit=crop', label: 'Reihe B · Abendstimmung', span: 'sm:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?q=80&w=800&auto=format&fit=crop', label: 'Reihe C · Zufahrt', span: '' },
]
</script>

<template>
  <section id="galerie" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">05</span> Impressionen</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Die Anlage im Überblick</h2>
      <p class="mt-4 text-ink-500">
        Ein Blick auf unsere Garagenreihen. Beispielfotos — echte Aufnahmen der Anlage folgen nach Absprache.
      </p>
    </div>

    <div class="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
      <figure
        v-for="photo in photos"
        :key="photo.src"
        class="group relative overflow-hidden rounded-lg border border-ink-900/8"
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
