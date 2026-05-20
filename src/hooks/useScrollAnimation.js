import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let observer = null;
    let fallbackTimer = null;

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setIsVisible(true)
            if (observer && ref.current) observer.unobserve(ref.current)
          }
        },
        { root: null, rootMargin: '0px', threshold: 0 }
      )
      observer.observe(ref.current)
    }

    // Fallback: If intersection observer fails (e.g. due to weird layout shifts or mounting issues), 
    // force it to be visible after 1.5 seconds anyway so the user doesn't see a blank page.
    fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current)
      }
      clearTimeout(fallbackTimer);
    }
  }, [])

  return [ref, isVisible]
}
