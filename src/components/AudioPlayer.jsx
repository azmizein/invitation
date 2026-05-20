import { useState, useEffect, useRef } from 'react'
import { Music, Music4 } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Risk It All by Bruno Mars
    // Using a streaming-friendly URL
    audioRef.current = new Audio('https://files.catbox.moe/m3jd8o.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4

    // Auto-play when component mounts (after user interaction on gate)
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Audio play failed: ", err))
        setIsPlaying(true)
      }
    }

    // Add a small delay to ensure audio is ready
    const timer = setTimeout(playAudio, 500)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => console.log("Audio play failed: ", err))
    }
    setIsPlaying(!isPlaying)
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
