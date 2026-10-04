<script setup lang="ts">
useSeoMeta({
  title: 'Preise — garagen-reich',
  description:
    'Transparente Monatsmiete für die Einzelgarage in Marchtrenk, inkl. Betriebskosten. Faire, klar aufgeschlüsselte Konditionen.',
})

const { open: openLightbox } = useLightbox()
const contactImage = { src: '/images/baustelle-01.jpg', alt: 'Garageninnenraum mit LED-Beleuchtung' }

const monthly = [
  { label: 'Miete', value: '€ 149,00', note: 'inkl. 20 % USt.' },
  { label: 'Stromkosten lt. Verbrauch', value: '€ 10,00', note: 'mtl. Vorauszahlung, inkl. 20 % USt.' },
]

const oneTime = [
  { label: 'Kaution', value: '€ 500,00' },
  { label: 'Finanzamtgebühr', value: '€ 57,24' },
  { label: 'Vertragserrichtungsgebühr', value: '€ 150,00', note: 'inkl. 20 % USt.' },
]

const extras = [
  { label: 'Kaution', value: '€ 500,00' },
  { label: 'Mindestmietdauer', value: '1 Jahr' },
  { label: 'Kündigungsfrist', value: '3 Monate zum Quartalsende' },
  { label: 'Nebenkosten', value: 'Strom nach Verbrauch, € 10,00 mtl. Vorauszahlung' },
]

const faqs = [
  {
    q: 'Sind die Preise inklusive Mehrwertsteuer?',
    a: 'Ja, alle ausgewiesenen Preise enthalten die gesetzliche Mehrwertsteuer von 20 %.',
  },
  {
    q: 'Wie lange ist die Mindestvertragslaufzeit?',
    a: 'Das Mietverhältnis läuft auf unbestimmte Dauer bei 1 Jahr Mindestmietdauer, anschließend mit einer Kündigungsfrist von 3 Monaten zum Quartalsende. Eine kürzere Mietdauer ist auf Anfrage gegen Aufpreis möglich.',
  },
  {
    q: 'Ist die Kaution nach Auszug rückzahlbar?',
    a: 'Ja, die Kaution in Höhe von € 500,00 wird nach Auszug und ordnungsgemäßer Übergabe der Garage vollständig zurückerstattet.',
  },
  {
    q: 'Kann ich die Garage vorab besichtigen?',
    a: 'Selbstverständlich. Vereinbare einfach über das Kontaktformular oder telefonisch einen Besichtigungstermin — wir zeigen dir die Garage gerne vor Ort.',
  },
  {
    q: 'Was ist mit dem Stromanschluss?',
    a: 'Jede Garage hat einen eigenen Subzähler — ideal auch zum Laden deines E-Autos. Die Stromkosten werden monatlich mit € 10,00 vorausbezahlt und nach Verbrauch abgerechnet.',
  },
]

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow justify-center"><span class="eyebrow-index">01</span> Preise</span>
        <h1 class="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Faire Mieten, klar kalkuliert
        </h1>
        <p class="mt-4 text-ink-500">
          Eine Garage, klar kalkuliert — inklusive Betriebskosten, ohne versteckte Zusatzkosten.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-md border border-ink-900/10 bg-white">
        <div class="bg-ink-900 px-8 py-6 text-center">
          <p class="text-xs font-semibold uppercase tracking-wide text-brand-400">Einzelgarage</p>
          <p class="mt-1 font-heading text-3xl font-bold text-white">
            € 149,00 <span class="text-base font-medium text-ink-300">mtl. inkl. Betriebskosten</span>
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-10 gap-y-8 p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wide text-ink-400">Monatliche Kosten</h3>
            <dl class="mt-4 space-y-3 border-t border-ink-900/8 pt-4 text-sm">
              <div v-for="item in monthly" :key="item.label" class="flex items-start justify-between gap-4">
                <dt class="text-ink-500">
                  {{ item.label }}
                  <span v-if="item.note" class="block text-xs text-ink-400">{{ item.note }}</span>
                </dt>
                <dd class="shrink-0 font-semibold text-ink-900">{{ item.value }}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wide text-ink-400">Einmalige Kosten</h3>
            <dl class="mt-4 space-y-3 border-t border-ink-900/8 pt-4 text-sm">
              <div v-for="item in oneTime" :key="item.label" class="flex items-start justify-between gap-4">
                <dt class="text-ink-500">
                  {{ item.label }}
                  <span v-if="item.note" class="block text-xs text-ink-400">{{ item.note }}</span>
                </dt>
                <dd class="shrink-0 font-semibold text-ink-900">{{ item.value }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="border-t border-ink-900/8 px-8 py-6 sm:px-10">
          <p class="text-xs font-semibold uppercase tracking-wide text-ink-400">Innenmaße &amp; Ausstattung</p>
          <ul class="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-ink-700 sm:grid-cols-2">
            <li>Innenmaße [L×B×H]: 5,84 × 2,84 × 2,14 m</li>
            <li>Fläche: ca. 16,5 m²</li>
            <li>Eigener Stromsubzähler</li>
            <li>3 Steckdosen je Garage</li>
            <li>LED-Lampe mit Lichtschalter</li>
            <li>Zufahrt durch Schranken gesichert</li>
          </ul>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-ink-500">
        Richtpreis, unverbindlich — kein Angebot im rechtlichen Sinn.
        Für ein individuelles Angebot einfach unten Kontakt aufnehmen.
      </p>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <span class="eyebrow justify-center"><span class="eyebrow-index">02</span> Konditionen</span>
      <div class="mt-6 grid grid-cols-1 divide-y divide-ink-900/8 border-y border-ink-900/8 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        <div v-for="extra in extras" :key="extra.label" class="px-4 py-6 text-center">
          <p class="text-xs font-medium uppercase tracking-wide text-ink-500">{{ extra.label }}</p>
          <p class="mt-1.5 text-sm font-semibold text-ink-900">{{ extra.value }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <span class="eyebrow justify-center"><span class="eyebrow-index">03</span> FAQ</span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Häufig gestellte Fragen
        </h2>
        <p class="mt-4 text-ink-500">Antworten rund um Miete, Vertrag und Ausstattung.</p>
      </div>
      <div class="mt-10">
        <FaqAccordion :items="faqs" />
      </div>
    </section>

    <section id="kontakt" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
        <div class="lg:col-span-2">
          <button
            type="button"
            class="block w-full cursor-zoom-in overflow-hidden rounded-lg border border-ink-900/8 shadow-card"
            aria-label="Garagen-Innenraum vergrößern"
            @click="openLightbox([contactImage])"
          >
            <img
              :src="contactImage.src"
              :alt="contactImage.alt"
              class="aspect-[3/4] w-full object-cover"
            />
          </button>

          <span class="eyebrow mt-8"><span class="eyebrow-index">04</span> Kontakt</span>
          <h2 class="mt-3 text-2xl font-bold text-ink-900">Direkt erreichbar</h2>

          <div class="mt-6 space-y-4">
            <a href="mailto:office@garagen-reich.at" class="flex items-center gap-3 text-sm text-ink-700 hover:text-ink-900">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-900 text-brand-500">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span class="block text-xs text-ink-500">E-Mail schreiben</span>
                office@garagen-reich.at
              </span>
            </a>
            <a href="tel:+4367763475223" class="flex items-center gap-3 text-sm text-ink-700 hover:text-ink-900">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-900 text-brand-500">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span class="block text-xs text-ink-500">Anrufen</span>
                +43 677 63475223
              </span>
            </a>
          </div>
        </div>

        <div class="glass-panel p-8 sm:p-10 lg:col-span-3">
          <h2 class="text-2xl font-bold text-ink-900">Jetzt Garage anfragen</h2>
          <p class="mt-2 text-sm text-ink-500">
            Formular ausfüllen — wir melden uns innerhalb von 48h bei dir.
          </p>

          <form v-if="!submitted" class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
            <div class="sm:col-span-1">
              <label for="name" class="text-xs font-medium text-ink-600">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="Dein Name"
              />
            </div>
            <div class="sm:col-span-1">
              <label for="email" class="text-xs font-medium text-ink-600">E-Mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="name@email.at"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="text-xs font-medium text-ink-600">Nachricht</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="Gewünschter Mietbeginn, Fragen..."
              />
            </div>
            <div class="sm:col-span-2 flex items-start gap-2.5">
              <input id="privacy" type="checkbox" required class="mt-1 h-4 w-4 rounded border-ink-900/25 bg-white accent-ink-900" />
              <label for="privacy" class="text-xs leading-relaxed text-ink-500">
                Ich habe die
                <NuxtLink to="/datenschutz" class="text-ink-900 underline hover:no-underline">Datenschutzerklärung</NuxtLink>
                und die
                <NuxtLink to="/agb" class="text-ink-900 underline hover:no-underline">AGB</NuxtLink>
                gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden.
              </label>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-primary w-full sm:w-auto">
                Anfrage senden
              </button>
            </div>
          </form>

          <div v-else class="mt-8 rounded-md border border-ink-900/15 bg-ink-50 p-6 text-sm text-ink-700">
            Danke, {{ form.name || 'für deine Anfrage' }}! Wir haben deine Nachricht erhalten und melden uns
            innerhalb von 48h.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
