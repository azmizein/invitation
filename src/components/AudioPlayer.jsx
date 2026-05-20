import { useState, useEffect, useRef } from 'react'
import { Music, Music4 } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Risk It All by Bruno Mars - from public folder
    audioRef.current = new Audio('/risk-it-all.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    // Auto-play saat halaman dibuka
    const autoPlay = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        console.log("Autoplay blocked, waiting for user interaction...")
      }
    }

    // Delay sedikit untuk memastikan audio siap
    const timer = setTimeout(autoPlay, 800)

    // Fallback: play on first user interaction (click anywhere)
    const handleUserInteraction = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          document.removeEventListener('click', handleUserInteraction)
        } catch (err) {
          console.log("Play failed on click")
        }
      }
    }

    document.addEventListener('click', handleUserInteraction)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleUserInteraction)
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(err => {
        console.error("Audio play failed: ", err)
        alert("Audio tidak bisa diputar. Pastikan file risk-it-all.mp3 ada di folder public/")
      })
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full bg-royal-dark/95 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-lg shadow-gold-900/40 hover:text-gold-200 transition-all duration-500 hover:scale-115 active:scale-90 relative ${
          isPlaying ? 'animate-slow-spin' : ''
        }`}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <Music className="w-5 h-5 text-gold-400" />
        ) : (
          <Music4 className="w-5 h-5 text-gold-600 opacity-60" />
        )}
        {/* Pulse effect when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-gold-400/30 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  )
}
