import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const revealAll = () => {
      el.querySelectorAll('.reveal').forEach((child) => child.classList.add('visible'))
    }

    const intersection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.current = true
            revealAll()
          }
        })
      },
      { threshold },
    )

    const mutation = new MutationObserver(() => {
      if (isVisible.current) revealAll()
    })

    intersection.observe(el)
    mutation.observe(el, { childList: true, subtree: true })

    return () => {
      intersection.disconnect()
      mutation.disconnect()
    }
  }, [threshold])

  return ref
}
