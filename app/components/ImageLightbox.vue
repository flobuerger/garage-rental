<script setup lang="ts">
const { images, index, isOpen, close, next, prev } = useLightbox()

const current = computed(() => images.value[index.value])
const hasMultiple = computed(() => images.value.length > 1)

function onKey(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

let touchStartX = 0
function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].clientX
}
function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50 && hasMultiple.value) {
    if (dx < 0) next()
    else prev()
  }
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(isOpen, (open) => {
  if (import.meta.client) document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && current"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Bildansicht"
        @click.self="close"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <button
          type="button"
          class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Schließen"
          @click="close"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          v-if="hasMultiple"
          type="button"
          class="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          aria-label="Vorheriges Bild"
          @click="prev"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 6-6 6 6 6" />
          </svg>
        </button>

        <button
          v-if="hasMultiple"
          type="button"
          class="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          aria-label="Nächstes Bild"
          @click="next"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 6 6 6-6 6" />
          </svg>
        </button>

        <figure class="flex max-h-full max-w-full flex-col items-center">
          <img
            :key="current.src"
            :src="current.src"
            :alt="current.alt"
            class="max-h-[80vh] max-w-full rounded-md object-contain shadow-2xl"
          />
          <figcaption class="mt-4 text-center text-sm text-white/80">
            {{ current.alt }}
            <span v-if="hasMultiple" class="ml-2 text-white/50">{{ index + 1 }} / {{ images.length }}</span>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </Teleport>
</template>
