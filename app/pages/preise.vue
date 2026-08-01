<script setup lang="ts">
useSeoMeta({
  title: 'Preise — Garagenpark Musterort',
  description:
    'Transparente Monatsmieten für Garagenstellplätze in Musterort. Kleine, mittlere und große Garagen, faire Konditionen.',
})

const plans = [
  {
    name: 'Kompakt',
    size: 'ca. 14–16 m²',
    price: '69',
    highlight: false,
    desc: 'Ideal für Kleinwagen, Motorrad oder als zusätzlicher Stauraum.',
    features: [
      'Einzelgarage, ebenerdig',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Monatlich kündbar',
    ],
  },
  {
    name: 'Standard',
    size: 'ca. 18–20 m²',
    price: '89',
    highlight: true,
    desc: 'Unsere meistgemietete Größe — passt für die meisten PKW bequem.',
    features: [
      'Einzelgarage, ebenerdig',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Strom­anschluss optional',
      'Monatlich kündbar',
    ],
  },
  {
    name: 'Komfort XL',
    size: 'ca. 24–28 m²',
    price: '129',
    highlight: false,
    desc: 'Doppelgarage oder viel Platz für SUV, Anhänger und Lagerung.',
    features: [
      'Doppelgarage möglich',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Strom­anschluss inklusive',
      'Flexible Vertragslaufzeit',
    ],
  },
]

const extras = [
  { label: 'Kaution', value: '2 Monatsmieten' },
  { label: 'Mindestlaufzeit', value: 'Keine (monatlich kündbar)' },
  { label: 'Kündigungsfrist', value: '1 Monat zum Monatsende' },
  { label: 'Nebenkosten', value: 'Strom nach Verbrauch (optional)' },
]

const faqs = [
  {
    q: 'Sind die Preise inklusive Mehrwertsteuer?',
    a: 'Ja, alle angegebenen Preise verstehen sich als Bruttopreise inklusive gesetzlicher Mehrwertsteuer.',
  },
  {
    q: 'Wie lange ist die Mindestvertragslaufzeit?',
    a: 'Standardmäßig gibt es keine Mindestlaufzeit — der Vertrag ist monatlich mit einer Frist von einem Monat zum Monatsende kündbar. Bei Jahresverträgen gewähren wir einen Rabatt.',
  },
  {
    q: 'Ist die Kaution nach Auszug rückzahlbar?',
    a: 'Ja, die Kaution in Höhe von zwei Monatsmieten wird nach Auszug und ordnungsgemäßer Übergabe der Garage vollständig zurückerstattet.',
  },
  {
    q: 'Kann ich die Garage vorab besichtigen?',
    a: 'Selbstverständlich. Vereinbare einfach über das Kontaktformular oder telefonisch einen Besichtigungstermin — wir zeigen dir gerne freie Einheiten vor Ort.',
  },
  {
    q: 'Gibt es Rabatt bei Anmietung mehrerer Garagen?',
    a: 'Ja, ab der zweiten Garage gewähren wir einen Mengenrabatt. Sprich uns bei deiner Anfrage einfach darauf an.',
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
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-600">Preise</span>
        <h1 class="mt-3 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          Faire Mieten, <span class="text-gradient">klar kalkuliert</span>
        </h1>
        <p class="mt-4 text-ink-500">
          Ein Überblick über unsere Garagengrößen und Richtpreise — alle Pakete
          monatlich kündbar, ohne versteckte Kosten.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex flex-col rounded-2xl border p-8"
          :class="
            plan.highlight
              ? 'border-brand-500/40 bg-gradient-to-b from-brand-50 to-white shadow-glow'
              : 'border-ink-900/6 bg-white'
          "
        >
          <span
            v-if="plan.highlight"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-ink-950"
          >
            Meistgemietete Größe
          </span>

          <h3 class="text-lg font-bold text-ink-900">{{ plan.name }}</h3>
          <p class="mt-1 text-sm text-ink-500">{{ plan.size }}</p>

          <div class="mt-6 flex items-end gap-1">
            <span class="text-4xl font-extrabold text-ink-900">{{ plan.price }} €</span>
            <span class="pb-1 text-sm text-ink-500">/ Monat</span>
          </div>
          <p class="mt-3 text-sm text-ink-500">{{ plan.desc }}</p>

          <ul class="mt-6 flex-1 space-y-3">
            <li v-for="f in plan.features" :key="f" class="flex items-center gap-2.5 text-sm text-ink-700">
              <svg viewBox="0 0 24 24" class="h-4.5 w-4.5 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {{ f }}
            </li>
          </ul>

          <p class="mt-8 border-t border-ink-900/8 pt-4 text-xs text-ink-400">
            Richtpreis, unverbindlich
          </p>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-ink-500">
        Alle Preise sind Beispielwerte zur Orientierung, kein Angebot im rechtlichen Sinn.
        Für ein individuelles Angebot einfach unten Kontakt aufnehmen.
      </p>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="glass-panel grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="extra in extras" :key="extra.label">
          <p class="text-xs font-medium uppercase tracking-wide text-ink-500">{{ extra.label }}</p>
          <p class="mt-1.5 text-sm font-semibold text-ink-900">{{ extra.value }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Häufig gestellte Fragen
        </h2>
        <p class="mt-4 text-ink-500">Antworten rund um Miete, Vertrag und Ausstattung.</p>
      </div>
      <div class="mt-10">
        <FaqAccordion :items="faqs" />
      </div>
    </section>

    <section id="kontakt" class="mx-auto max-w-3xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
      <div class="glass-panel p-8 sm:p-10">
        <h2 class="text-2xl font-extrabold text-ink-900">Jetzt Garage anfragen</h2>
        <p class="mt-2 text-sm text-ink-500">
          Formular ausfüllen — wir melden uns innerhalb eines Werktags bei dir.
        </p>

        <form v-if="!submitted" class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
          <div class="sm:col-span-1">
            <label for="name" class="text-xs font-medium text-ink-600">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="mt-1.5 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20"
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
              class="mt-1.5 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20"
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
              class="mt-1.5 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Gewünschte Garagengröße, gewünschter Mietbeginn, Fragen..."
            />
          </div>
          <div class="sm:col-span-2 flex items-start gap-2.5">
            <input id="privacy" type="checkbox" required class="mt-1 h-4 w-4 rounded border-ink-900/25 bg-white accent-brand-500" />
            <label for="privacy" class="text-xs leading-relaxed text-ink-500">
              Ich habe die
              <NuxtLink to="/datenschutz" class="text-brand-600 hover:underline">Datenschutzerklärung</NuxtLink>
              und die
              <NuxtLink to="/agb" class="text-brand-600 hover:underline">AGB</NuxtLink>
              gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden.
            </label>
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              class="w-full rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition hover:bg-brand-400 sm:w-auto"
            >
              Anfrage senden
            </button>
          </div>
        </form>

        <div v-else class="mt-8 rounded-2xl border border-brand-500/30 bg-brand-50 p-6 text-sm text-brand-800">
          Danke, {{ form.name || 'für deine Anfrage' }}! Wir haben deine Nachricht erhalten und melden uns
          innerhalb eines Werktags.
        </div>
      </div>
    </section>
  </div>
</template>
