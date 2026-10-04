export interface LightboxImage {
  src: string
  alt: string
}

export function useLightbox() {
  const images = useState<LightboxImage[]>('lightbox-images', () => [])
  const index = useState<number>('lightbox-index', () => 0)
  const isOpen = useState<boolean>('lightbox-open', () => false)

  function open(list: LightboxImage[], startIndex = 0) {
    images.value = list
    index.value = startIndex
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  function next() {
    if (!images.value.length) return
    index.value = (index.value + 1) % images.value.length
  }

  function prev() {
    if (!images.value.length) return
    index.value = (index.value - 1 + images.value.length) % images.value.length
  }

  return { images, index, isOpen, open, close, next, prev }
}
