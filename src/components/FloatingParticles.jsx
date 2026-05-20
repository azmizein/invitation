import { useMemo } from 'react'

export default function FloatingParticles({ count = 40 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.6 + 0.2,
      rotationDuration: Math.random() * 8 + 4,
      swayAmount: Math.random() * 30 + 20,
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle particle-gold"
          style={{
            left: p.left,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--sway': `${p.swayAmount}px`,
            '--rotate': `${Math.random() * 360}deg`,
          }}
        />
      ))}
    </div>
  )
}
