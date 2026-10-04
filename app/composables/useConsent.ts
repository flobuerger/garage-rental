const STORAGE_KEY = 'gr-consent-v1'

export type ConsentChoice = 'all' | 'necessary' | null

export function useConsent() {
  // null = noch keine Entscheidung getroffen
  const choice = useState<ConsentChoice>('consent-choice', () => null)
  const ready = useState<boolean>('consent-ready', () => false)
  const panelOpen = useState<boolean>('consent-panel-open', () => false)

  function load() {
    if (!import.meta.client) return
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      choice.value = v === 'all' || v === 'necessary' ? v : null
    } catch {
      choice.value = null
    }
    ready.value = true
    panelOpen.value = choice.value === null
  }

  function save(value: Exclude<ConsentChoice, null>) {
    choice.value = value
    panelOpen.value = false
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* Speicherung nicht möglich — Auswahl gilt nur für diese Sitzung */
    }
  }

  function reopen() {
    panelOpen.value = true
  }

  const externalMedia = computed(() => choice.value === 'all')

  return { choice, ready, panelOpen, externalMedia, load, save, reopen }
}
