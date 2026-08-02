<script setup lang="ts">
const testimonials = [
  { initials: 'ML', name: 'Markus L.', location: 'Musterort', quote: 'Unkomplizierte Anmeldung und die Garage ist immer sauber und trocken. Genau das, was ich gesucht habe.' },
  { initials: 'SF', name: 'Sabine F.', location: 'Musterort', quote: 'Die Videoüberwachung gibt mir ein gutes Gefühl — mein Motorrad steht dort sicherer als vor dem Haus.' },
  { initials: 'TK', name: 'Thomas K.', location: 'Umgebung Musterort', quote: 'Ebenerdige Zufahrt war mir wichtig, weil ich einen Anhänger habe. Passt perfekt, keine Rampen.' },
  { initials: 'JW', name: 'Julia W.', location: 'Musterort', quote: 'Monatlich kündbar ohne Kleingedrucktes — genau das habe ich mir von einer Garagenmiete erwartet.' },
  { initials: 'DP', name: 'Daniel P.', location: 'Umgebung Musterort', quote: 'Zugangscode funktioniert rund um die Uhr zuverlässig, auch spät abends nach der Schicht.' },
]
</script>

<template>
  <section class="overflow-hidden border-y border-ink-900/8 bg-ink-50 py-24">
    <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
      <span class="eyebrow justify-center"><span class="eyebrow-index">07</span> Kundenstimmen</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Was unsere Mieter sagen
      </h2>
      <p class="mt-4 text-ink-500">
        Beispielhafte Stimmen, wie sie künftige Mieter hinterlassen könnten.
      </p>
    </div>

    <div class="group mt-14 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div class="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
        <div
          v-for="(t, i) in [...testimonials, ...testimonials]"
          :key="i"
          class="w-80 shrink-0 rounded-lg border border-ink-900/8 bg-white p-6"
        >
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-heading text-sm font-bold text-brand-500">
              {{ t.initials }}
            </span>
            <div>
              <p class="text-sm font-semibold text-ink-900">{{ t.name }}</p>
              <p class="text-xs text-ink-500">{{ t.location }}</p>
            </div>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-ink-600">„{{ t.quote }}"</p>
        </div>
      </div>
    </div>

    <p class="mt-8 text-center text-xs text-ink-500">
      Beispieltexte zur Illustration — echte Bewertungen folgen nach dem Launch.
    </p>
  </section>
</template>
