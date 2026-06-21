import { useEffect } from 'react'

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentMeta({ title, robots }) {
  useEffect(() => {
    const previousTitle = document.title
    const robotsEl = document.querySelector('meta[name="robots"]')
    const previousRobots = robotsEl?.getAttribute('content') ?? null

    if (title) document.title = title
    if (robots) setMeta('robots', robots)

    return () => {
      document.title = previousTitle
      if (robots) {
        if (previousRobots) setMeta('robots', previousRobots)
        else robotsEl?.remove()
      }
    }
  }, [title, robots])
}