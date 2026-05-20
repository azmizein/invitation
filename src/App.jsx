import { useState, useEffect } from 'react'
import { 
  Heart, Calendar, MapPin, Clock, Copy, 
  Check, Send, Music, Award, ChevronDown, 
  Volume2, VolumeX, Sparkles, BookOpen, Gift
} from 'lucide-react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import AudioPlayer from './components/AudioPlayer'
import FloatingParticles from './components/FloatingParticles'

// Local couple image imports
import couple1 from './assets/couple/couple_1.jpg'
import couple2 from './assets/couple/couple_2.jpg'
import couple3 from './assets/couple/couple_3.jpg'
import couple4 from './assets/couple/couple_4.jpg'
import couple5 from './assets/couple/couple_5.jpg'
import couple6 from './assets/couple/couple_6.jpg'
import couple7 from './assets/couple/couple_7.jpg'
import couple8 from './assets/couple/couple_8.jpg'
import couple9 from './assets/couple/couple_9.jpg'
import couple10 from './assets/couple/couple_10.jpg'
import couple11 from './assets/couple/couple_11.jpg'
import couple12 from './assets/couple/couple_12.jpg'
import couple13 from './assets/couple/couple_13.jpg'
import heroBg from './assets/royal_hero_bg.png'

const coupleImages = [
  { src: couple1, caption: 'Pandangan Pertama' },
  { src: couple2, caption: 'Saling Percaya' },
  { src: couple3, caption: 'Langkah Bersama' },
  { src: couple4, caption: 'Kemesraan Hangat' },
  { src: couple5, caption: 'Satu Tujuan' },
  { src: couple6, caption: 'Kebahagiaan Kita' },
  { src: couple7, caption: 'Janji Setia' },
  { src: couple8, caption: 'Menatap Masa Depan' },
  { src: couple9, caption: 'Cinta Abadi' },
  { src: couple10, caption: 'Tawa Ceria' },
  { src: couple11, caption: 'Hari Terindah' },
  { src: couple12, caption: 'Pelukan Damai' },
  { src: couple13, caption: 'Menyatu dalam Jiwa' },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [guestName, setGuestName] = useState('Tamu Kehormatan')
  const [copiedBank, setCopiedBank] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // RSVP Form state
  const [rsvpList, setRsvpList] = useState([
    { name: 'Rahmat & Keluarga', attendance: 'Hadir', wish: 'Selamat menempuh hidup baru untuk kedua mempelai! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.' },
    { name: 'Dr. Sofia Amanda', attendance: 'Hadir', wish: 'Selamat ya! Sangat serasi sekali bagaikan pangeran dan putri kerajaan. Bahagia selalu selamanya!' },
    { name: 'Bimo Wicaksono', attendance: 'Hadir', wish: 'Happy wedding! Lancar terus sampai hari H ya kawan. Selamat berbahagia!' },
  ])
  const [formData, setFormData] = useState({ name: '', attendance: 'Hadir', wish: '' })
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Parse guest name from URL query parameter 'to'
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const to = params.get('to')
    if (to) {
      setGuestName(to)
    }
  }, [])

  // Wedding date: 2026-10-10 09:00:00 UTC
  useEffect(() => {
    const weddingDate = new Date('2026-10-10T09:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference <= 0) {
        clearInterval(interval)
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text, bankId) => {
    navigator.clipboard.writeText(text)
    setCopiedBank(bankId)
    setTimeout(() => setCopiedBank(null), 3000)
  }

  const handleRsvpSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.wish) return

    setRsvpList([
      { name: formData.name, attendance: formData.attendance, wish: formData.wish },
      ...rsvpList
    ])
    setFormData({ name: '', attendance: 'Hadir', wish: '' })
    setRsvpSubmitted(true)
    setTimeout(() => setRsvpSubmitted(false), 4000)
  }

  // Scroll animated refs
  const [refHero, isHeroVisible] = useScrollAnimation()
  const [refCouple, isCoupleVisible] = useScrollAnimation()
  const [refEvents, isEventsVisible] = useScrollAnimation()
  const [refStory, isStoryVisible] = useScrollAnimation()
  const [refGallery, isGalleryVisible] = useScrollAnimation()
  const [refRSVP, isRSVPVisible] = useScrollAnimation()
  const [refGift, isGiftVisible] = useScrollAnimation()

  return (
    <div className="relative bg-royal-dark text-gold-50 selection:bg-gold-500/20 selection:text-gold-100 font-body">
      
      {/* 1. GATE / COVER SCREEN */}
      {!isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-royal-dark overflow-hidden px-4">
          {/* Royal background texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,31,25,0.4)_0%,rgba(18,15,13,0.95)_80%)] pointer-events-none" />
          
          {/* Floating particles on cover */}
          <FloatingParticles count={20} />
          
          {/* Golden animated crown frame */}
          <div className="relative z-10 w-full max-w-lg p-8 rounded-3xl border border-gold-400/20 bg-royal-velvet/40 backdrop-blur-md text-center royal-border ornament-corner shadow-2xl shadow-black/80 animate-fade-in-up">
            
            {/* Love Monogram */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-gold-400/40 flex items-center justify-center text-gold-400 relative animate-glow-pulse">
                <Heart className="w-8 h-8 animate-heartbeat text-gold-300" />
              </div>
            </div>

            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-gold-400 block mb-3 animate-text-reveal">
              The Royal Wedding Celebration of
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-gold-100 tracking-wide mb-2 leading-none">
              Azmi &amp; Gina
            </h1>
            <span className="font-script text-3xl text-gold-300 block mb-4">Saturday, 10 October 2026</span>

            {/* Sparkle divider */}
            <div className="sparkle-divider" />

            {/* Recipient area */}
            <div className="my-6 py-6 px-4 bg-royal-dark/60 rounded-2xl border border-gold-400/10">
              <span className="block text-xs uppercase tracking-widest text-gold-500/70 font-sans mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</span>
              <span className="block text-xl font-serif font-bold text-gold-200 tracking-wide">{guestName}</span>
            </div>

            <p className="text-gold-100/60 text-sm italic font-light mb-8 max-w-sm mx-auto leading-relaxed">
              &ldquo;Dengan segala hormat dan kerendahan hati, kami mengundang Anda untuk menyaksikan persatuan suci kami.&rdquo;
            </p>

            <button
              onClick={() => setIsOpen(true)}
              id="open-invitation-btn"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-royal-dark font-sans text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 mx-auto animate-glow-pulse"
            >
              <Heart className="w-4 h-4 group-hover:animate-heartbeat" />
              Buka Undangan
            </button>

          </div>
        </div>
      )}

      {/* 2. MAIN WEBSITE CONTENT */}
      {isOpen && (
        <div className="w-full animate-fade-in-up">
          <AudioPlayer />

          {/* HERO SECTION */}
          <section
            id="home"
            ref={refHero}
            className="relative min-h-screen flex items-center justify-center bg-royal-dark py-24 text-center"
          >
            {/* Background image & gradient blend */}
            <div className="absolute inset-0 bg-cover bg-center select-none" style={{ backgroundImage: `url(${heroBg})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-royal-dark/40 via-royal-dark/70 to-royal-dark" />
            </div>
            
            {/* Floating particles */}
            <FloatingParticles count={30} />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4">
              <div className="inline-flex items-center gap-3 mb-6 bg-royal-velvet/60 border border-gold-400/20 rounded-full px-6 py-2.5 backdrop-blur-sm animate-fade-in-down">
                <span className="text-gold-400 text-xs sm:text-sm tracking-[0.35em] uppercase font-sans font-semibold">The Wedding of Azmi &amp; Gina</span>
              </div>

              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-black text-gold-100 tracking-wide mb-4 leading-none animate-float">
                Azmi &amp; Gina
              </h2>

              <p className="font-script text-3xl sm:text-4xl text-gold-300 mb-4 animate-fade-in-up">
                Penyatuan Dua Jiwa di Bawah Restu Semesta
              </p>

              {/* Sparkle divider */}
              <div className="sparkle-divider mb-10" />

              {/* Countdown Timer Widget */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto py-6 px-4 bg-royal-velvet/40 backdrop-blur-sm border border-gold-400/20 rounded-2xl mb-12 shadow-2xl ornament-corner animate-glow-pulse">
                {[
                  { value: timeLeft.days, label: 'Hari' },
                  { value: timeLeft.hours, label: 'Jam' },
                  { value: timeLeft.minutes, label: 'Menit' },
                  { value: timeLeft.seconds, label: 'Detik' },
                ].map((t, i) => (
                  <div key={t.label} className="text-center" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="font-serif text-2xl sm:text-4xl font-extrabold text-gold-200">{t.value}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-gold-500 font-sans mt-1">{t.label}</div>
                  </div>
                ))}
              </div>

              <div className="animate-bounce mt-10">
                <ChevronDown className="w-8 h-8 text-gold-400 mx-auto opacity-70" />
              </div>
            </div>
          </section>

          {/* 3. PROFIL PENGANTIN (THE COUPLE) */}
          <section
            id="pengantin"
            ref={refCouple}
            className="py-16 lg:py-24 relative overflow-hidden bg-royal-dark"
          >
            {/* Fairytale Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${couple10})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-royal-dark via-royal-dark/80 to-royal-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

            <FloatingParticles count={15} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ease-out ${isCoupleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <Heart className="w-8 h-8 text-gold-400 mx-auto mb-4 animate-heartbeat" />
                <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold">The Royal Couple</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gold-100 mt-3 mb-4">Mempelai Agung</h2>
                <div className="sparkle-divider mb-6" />
                <p className="text-gold-200/60 leading-relaxed text-lg">
                  &ldquo;Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, bimbinglah kami menuju ikatan yang mulia.&rdquo;
                </p>
              </div>

              {/* Profiles Row */}
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                
                {/* Mempelai Pria (Prince) - slides from left */}
                <div className={`text-center transition-all duration-[1200ms] ease-out ${isCoupleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`}>
                  
                  {/* Photo Frame */}
                  <div className={`relative w-64 h-80 sm:w-72 sm:h-96 mx-auto mb-8 rounded-t-full border border-gold-400/20 p-2 overflow-hidden royal-border shadow-2xl animate-glow-pulse transition-all duration-700 ${isCoupleVisible ? 'scale-100' : 'scale-95'}`}>
                    <img
                      src={couple12}
                      alt="Muhammad Azmi Zein"
                      className="w-full h-full object-cover rounded-t-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-100 mb-2">Muhammad Azmi Zein, S.Kom.</h3>
                  <span className="text-gold-400 text-xs font-sans uppercase tracking-[0.2em] block mb-4">Mempelai Pria</span>
                  
                  <p className="text-gold-200/70 text-sm leading-relaxed max-w-xs mx-auto mb-4">
                    Putra Pertama Tercinta dari Bapak:<br />
                    <span className="font-serif font-bold text-gold-100 mt-1 block">Pepen Rionida</span>
                  </p>
                </div>

                {/* Animated love heart between profiles */}
                <div className={`flex items-center justify-center transition-all duration-[1500ms] ease-out ${isCoupleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent hidden md:block" />
                    <Heart className="w-10 h-10 text-gold-400 animate-heartbeat" />
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent hidden md:block" />
                  </div>
                </div>

                {/* Mempelai Wanita (Princess) - slides from right */}
                <div className={`text-center transition-all duration-[1200ms] ease-out delay-200 ${isCoupleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'}`}>
                  
                  {/* Photo Frame */}
                  <div className={`relative w-64 h-80 sm:w-72 sm:h-96 mx-auto mb-8 rounded-t-full border border-gold-400/20 p-2 overflow-hidden royal-border shadow-2xl animate-glow-pulse transition-all duration-700 ${isCoupleVisible ? 'scale-100' : 'scale-95'}`}>
                    <img
                      src={couple4}
                      alt="Gina Saskia Mouriska"
                      className="w-full h-full object-cover rounded-t-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-100 mb-2">Gina Saskia Mouriska</h3>
                  <span className="text-gold-400 text-xs font-sans uppercase tracking-[0.2em] block mb-4">Mempelai Wanita</span>

                  <p className="text-gold-200/70 text-sm leading-relaxed max-w-xs mx-auto mb-4">
                    Anak Bungsu Tercinta dari Bapak:<br />
                    <span className="font-serif font-bold text-gold-100 mt-1 block">Sayuti</span>
                  </p>
                </div>

              </div>

              {/* Bottom sparkle divider */}
              <div className="sparkle-divider mt-16" />

            </div>
          </section>

          {/* 4. ACARA PERNIKAHAN (EVENTS) */}
          <section
            id="acara"
            ref={refEvents}
            className="py-16 lg:py-24 relative bg-royal-dark overflow-hidden"
          >
            {/* Fairytale Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${couple2})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-royal-dark via-royal-dark/80 to-royal-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(42,31,25,0.4)_0%,transparent_70%)] pointer-events-none" />

            <FloatingParticles count={15} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className={`font-script text-5xl sm:text-6xl text-gold-300 block mb-4 animate-float transition-all duration-1000 ease-out ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Save The Date</span>
                <div className="sparkle-divider mb-8" />
                
                <div className={`px-4 transition-all duration-1000 delay-100 ease-out ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <p className="font-serif text-2xl sm:text-3xl text-gold-100 leading-loose mb-6" dir="rtl">
                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                  </p>
                  
                  <p className="text-gold-200/80 leading-relaxed text-sm sm:text-base font-serif mb-6">
                    "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                  </p>
                  
                  <span className="text-gold-400 font-sans font-bold text-xs uppercase tracking-[0.2em] block mb-8">
                    - QS. Ar-Rum : 21 -
                  </span>
                  <div className="sparkle-divider" />
                </div>

                <h2 className={`font-serif text-4xl sm:text-5xl font-bold text-gold-100 mb-4 mt-8 transition-all duration-1000 delay-200 ease-out ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Waktu &amp; Tempat</h2>
                <p className="text-gold-200/60 leading-relaxed text-sm">
                  Dengan memohon ridho-Mu ya Allah, kami mengundang kehadiran Bapak/Ibu/Saudara/i sekalian untuk hadir di acara sakral kami:
                </p>
              </div>

              {/* Event Cards */}
              <div className={`grid md:grid-cols-2 gap-8 items-stretch transition-all duration-1000 ease-out ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                {/* Akad Nikah - slides from left */}
                <div className={`bg-royal-velvet/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gold-400/20 royal-border text-center flex flex-col justify-between hover:shadow-2xl hover:shadow-gold-500/5 hover:border-gold-400/40 transition-all duration-[1200ms] ease-out ${isEventsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div>
                    <div className="w-16 h-16 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 mx-auto mb-6">
                      <Calendar className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-serif text-3xl font-extrabold text-gold-100 mb-6">Akad Nikah</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center gap-3 text-gold-200/80">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span className="text-sm font-semibold tracking-wide">Sabtu, 10 Oktober 2026</span>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-gold-200/80">
                        <Clock className="w-4 h-4 text-gold-400" />
                        <span className="text-sm">Pukul 09:00 WIB - 11:00 WIB</span>
                      </div>
                      <div className="flex items-start justify-center gap-3 text-gold-200/80 max-w-sm mx-auto">
                        <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-left">
                          <strong>Masjid Raya Istiqlal</strong><br />
                          Jl. Taman Wijaya Kusuma, Ps. Baru, Sawah Besar, Kota Jakarta Pusat
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Masjid+Raya+Istiqlal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-700 text-royal-dark font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka Google Maps
                  </a>
                </div>

                {/* Resepsi - slides from right */}
                <div className={`bg-royal-velvet/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gold-400/20 royal-border text-center flex flex-col justify-between hover:shadow-2xl hover:shadow-gold-500/5 hover:border-gold-400/40 transition-all duration-[1200ms] ease-out delay-100 ${isEventsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <div>
                    <div className="w-16 h-16 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 mx-auto mb-6">
                      <Award className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-3xl font-extrabold text-gold-100 mb-6">Resepsi Agung</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center gap-3 text-gold-200/80">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span className="text-sm font-semibold tracking-wide">Sabtu, 10 Oktober 2026</span>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-gold-200/80">
                        <Clock className="w-4 h-4 text-gold-400" />
                        <span className="text-sm">Pukul 13:00 WIB - Selesai</span>
                      </div>
                      <div className="flex items-start justify-center gap-3 text-gold-200/80 max-w-sm mx-auto">
                        <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-left">
                          <strong>Grand Ballroom Hotel Mulia</strong><br />
                          Jl. Asia Afrika, Gelora, Kecamatan Tanah Abang, Jakarta Pusat
                        </span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Hotel+Mulia+Senayan+Jakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-700 text-royal-dark font-sans text-xs font-bold uppercase tracking-wider py-3 rounded-full hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4" />
                    Buka Google Maps
                  </a>
                </div>

              </div>

            </div>
          </section>

          {/* OUR STORY (KISAH CINTA KAMI) */}
          <section
            id="story"
            ref={refStory}
            className="py-16 lg:py-24 relative bg-royal-dark overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-20">
                <Heart className="w-8 h-8 text-gold-400 mx-auto mb-4 animate-float" />
                <span className="text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold">Our Journey</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gold-100 mt-3 mb-4">Kisah Cinta Kami</h2>
                <div className="sparkle-divider mb-6" />
                <p className="text-gold-200/60 leading-relaxed text-lg">
                  Setiap perjalanan memiliki cerita, dan inilah awal dari perjalanan keabadian kami.
                </p>
              </div>

              {/* Vertical Timeline */}
              <div className="relative border-l border-gold-400/30 ml-4 md:mx-auto md:border-l-0 md:flex md:flex-col items-center">
                
                {/* Desktop center line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gold-400/30 -translate-x-1/2" />

                {/* Timeline Item 1 */}
                <div className={`relative mb-16 md:w-full flex flex-col md:flex-row md:items-center justify-between transition-all duration-1000 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  {/* Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-royal-dark border-2 border-gold-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10">
                    <Heart className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-0 md:text-right pr-0 md:pr-12">
                    <span className="font-sans text-gold-400 font-bold tracking-widest text-sm mb-2 block">2023 - PERTEMUAN PERTAMA</span>
                    <h3 className={`font-serif text-3xl font-bold text-gold-100 mb-4 transition-all duration-700 ${isStoryVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>Awal Sebongkah Rasa</h3>
                    <p className="text-gold-200/70 text-sm leading-relaxed">
                      Kami pertama kali bertemu di sebuah acara reuni. Tidak ada yang menduga bahwa obrolan ringan malam itu akan menjadi awal dari kedekatan kami yang semakin dalam seiring berjalannya waktu.
                    </p>
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-12 mt-6 md:mt-0 flex justify-start">
                    <div className="rounded-2xl border border-gold-400/20 overflow-hidden shadow-2xl p-2 bg-royal-velvet/30 royal-border inline-block max-w-[280px]">
                       <img src={couple1} alt="Pertemuan Pertama" className="w-full h-auto rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className={`relative md:w-full flex flex-col md:flex-row-reverse md:items-center justify-between transition-all duration-1000 delay-300 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  {/* Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-royal-dark border-2 border-gold-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10">
                    <Heart className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-0 md:text-left pr-0 md:pl-12">
                    <span className="font-sans text-gold-400 font-bold tracking-widest text-sm mb-2 block">2025 - LAMARAN</span>
                    <h3 className="font-serif text-3xl font-bold text-gold-100 mb-4">Mengikat Janji</h3>
                    <p className="text-gold-200/70 text-sm leading-relaxed">
                      Dua tahun saling mengenal dan mengerti, kami memutuskan untuk membawa hubungan ini ke arah yang lebih serius. Di hadapan keluarga besar, kami mengikat janji suci untuk saling setia selamanya.
                    </p>
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-0 pr-0 md:pr-12 mt-6 md:mt-0 flex md:justify-end">
                    <div className="rounded-2xl border border-gold-400/20 overflow-hidden shadow-2xl p-2 bg-royal-velvet/30 royal-border inline-block max-w-[280px]">
                       <img src={couple9} alt="Lamaran" className="w-full h-auto rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 - NIKAH */}
                <div className={`relative mt-16 md:w-full flex flex-col md:flex-row md:items-center justify-between transition-all duration-1000 delay-500 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  {/* Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-royal-dark border-2 border-gold-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10">
                    <Heart className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-0 md:text-right pr-0 md:pr-12">
                    <span className="font-sans text-gold-400 font-bold tracking-widest text-sm mb-2 block">2026 - PERNIKAHAN</span>
                    <h3 className="font-serif text-3xl font-bold text-gold-100 mb-4">Hari Bahagia</h3>
                    <p className="text-gold-200/70 text-sm leading-relaxed">
                      InsyaAllah, pada tanggal 10 Oktober 2026, kami akan menyatukan langkah dan hati dalam ikatan pernikahan yang suci. Sebuah momen terindah yang telah lama kami nantikan bersama.
                    </p>
                  </div>
                  <div className="md:w-5/12 pl-8 md:pl-12 mt-6 md:mt-0 flex justify-start">
                    <div className="rounded-2xl border border-gold-400/20 overflow-hidden shadow-2xl p-2 bg-royal-velvet/30 royal-border inline-block max-w-[280px]">
                       <img src={couple5} alt="Hari Pernikahan" className="w-full h-auto rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 5. GALERI FOTO PREWEDDING (GRID PRESET COUPLE IMAGES) */}
          <section
            id="galeri"
            ref={refGallery}
            className="py-16 lg:py-24 relative bg-royal-dark overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-royal-dark via-royal-velvet/20 to-royal-dark pointer-events-none" />
            <FloatingParticles count={12} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center max-w-2xl mx-auto mb-20">
                <span className={`text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold transition-all duration-1000 ease-out ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Our Album</span>
                <h2 className={`font-serif text-4xl sm:text-5xl font-bold text-gold-100 mt-3 mb-4 transition-all duration-1000 delay-100 ease-out ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Momen Indah Kami</h2>
                <div className={`sparkle-divider mb-6 transition-all duration-1000 delay-200 ease-out ${isGalleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                <p className={`text-gold-200/60 leading-relaxed text-lg transition-all duration-1000 delay-300 ease-out ${isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Kumpulan potret bahagia perjumpaan kami sebelum dipersatukan dalam mahligai rumah tangga.
                </p>
              </div>

              {/* Masonry / Grid Photo Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {coupleImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-gold-400/20 royal-border hover:border-gold-400/50 shadow-lg hover:shadow-2xl transition-all duration-1000 ${
                      isGalleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    } ${
                      i === 0 || i === 7 ? 'sm:col-span-2 sm:row-span-2 h-[450px]' : 'h-[210px]'
                    }`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                      <span className="text-gold-100 font-serif text-lg tracking-wide">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* LIGHTBOX PREVIEW MODAL */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-royal-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh] animate-scale-in" onClick={e => e.stopPropagation()}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-gold-400/20 shadow-2xl"
                />
                <div className="text-center mt-4">
                  <span className="text-gold-100 font-serif text-xl tracking-wider">{selectedImage.caption}</span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 bg-royal-velvet border border-gold-400/30 rounded-full flex items-center justify-center text-gold-300 hover:text-gold-100 hover:bg-gold-500 hover:text-royal-dark transition-all duration-300"
                >
                  &times;
                </button>
              </div>
            </div>
          )}

          {/* 6. RSVP & BUKU TAMU */}
          <section
            id="rsvp"
            ref={refRSVP}
            className="py-16 lg:py-24 relative bg-royal-dark overflow-hidden"
          >
            {/* Fairytale Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${couple8})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-royal-dark/90 to-royal-dark" />
            <FloatingParticles count={10} />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <BookOpen className={`w-8 h-8 text-gold-400 mx-auto mb-4 animate-float-reverse transition-all duration-1000 ease-out ${isRSVPVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                <span className={`text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold transition-all duration-1000 delay-100 ease-out block ${isRSVPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>RSVP &amp; Wishes</span>
                <h2 className={`font-serif text-4xl sm:text-5xl font-bold text-gold-100 mt-3 mb-4 transition-all duration-1000 delay-200 ease-out ${isRSVPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Buku Tamu &amp; Konfirmasi</h2>
                <div className={`sparkle-divider mb-6 transition-all duration-1000 delay-300 ease-out ${isRSVPVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                <p className={`text-gold-200/60 leading-relaxed text-lg transition-all duration-1000 delay-400 ease-out ${isRSVPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Kirimkan doa restu hangat dan konfirmasi kehadiran Anda di bawah ini.
                </p>
              </div>

              {/* RSVP Form and Display Split */}
              <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-500 ease-out ${isRSVPVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                {/* Form Side - slides from left */}
                <div className={`transition-all duration-[1200ms] ease-out ${isRSVPVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <form onSubmit={handleRsvpSubmit} className="bg-royal-velvet/40 border border-gold-400/20 royal-border rounded-3xl p-8 space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-gold-100 mb-4">Formulir Konfirmasi</h3>
                    
                    {rsvpSubmitted && (
                      <div className="bg-green-600/20 border border-green-500/30 text-green-300 rounded-xl p-4 text-sm flex items-center gap-3">
                        <Check className="w-5 h-5 flex-shrink-0" />
                        <span>Kehadiran &amp; doa restu Anda berhasil dikirim! Terima kasih.</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="rsvp-name" className="block text-gold-200/70 text-sm font-sans mb-2 font-medium">Nama Tamu *</label>
                      <input
                        id="rsvp-name"
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Lengkap Anda"
                        required
                        className="w-full bg-royal-dark border border-gold-400/20 rounded-xl px-4 py-3 text-sm text-gold-100 placeholder-gold-500/30 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="rsvp-attendance" className="block text-gold-200/70 text-sm font-sans mb-2 font-medium">Konfirmasi Kehadiran *</label>
                      <select
                        id="rsvp-attendance"
                        value={formData.attendance}
                        onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-full bg-royal-dark border border-gold-400/20 rounded-xl px-4 py-3 text-sm text-gold-100 focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="Hadir">Saya Hadir dengan Senang Hati</option>
                        <option value="Tidak Hadir">Mohon Maaf, Saya Berhalangan Hadir</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rsvp-wish" className="block text-gold-200/70 text-sm font-sans mb-2 font-medium">Ucapan &amp; Doa Restu *</label>
                      <textarea
                        id="rsvp-wish"
                        value={formData.wish}
                        onChange={e => setFormData({ ...formData, wish: e.target.value })}
                        placeholder="Tuliskan ucapan selamat pernikahan yang manis..."
                        required
                        rows={4}
                        className="w-full bg-royal-dark border border-gold-400/20 rounded-xl px-4 py-3 text-sm text-gold-100 placeholder-gold-500/30 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="rsvp-submit-btn"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-royal-dark py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Kirim Ucapan
                    </button>
                  </form>
                </div>

                {/* Wishes Feed Side - slides from right */}
                <div className={`transition-all duration-[1200ms] ease-out delay-200 ${isRSVPVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <div className="bg-royal-velvet/40 border border-gold-400/20 royal-border rounded-3xl p-6 h-[480px] flex flex-col">
                    <div className="flex items-center gap-3 border-b border-gold-400/10 pb-4 mb-4">
                      <BookOpen className="w-5 h-5 text-gold-400" />
                      <h3 className="font-serif text-2xl font-bold text-gold-100">Dinding Doa Restu</h3>
                    </div>
                    
                    {/* Scrolling Wishes Area */}
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                      {rsvpList.map((rsvp, idx) => (
                        <div key={idx} className={`p-4 bg-royal-dark/50 border border-gold-400/10 rounded-2xl transition-all duration-700 ease-out ${isRSVPVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: `${200 + idx * 100}ms` }}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-serif text-base font-bold text-gold-200">{rsvp.name}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-semibold tracking-wider ${
                              rsvp.attendance === 'Hadir' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}>
                              {rsvp.attendance}
                            </span>
                          </div>
                          <p className="text-gold-100/60 text-sm leading-relaxed italic">&ldquo;{rsvp.wish}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* 7. HADIAH KASIH (WEDDING GIFT / DIGITAL KADO) */}
          <section
            id="hadiah"
            ref={refGift}
            className="py-16 lg:py-24 relative bg-royal-dark overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-royal-dark via-royal-velvet/10 to-royal-dark pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              
              <div className="max-w-2xl mx-auto mb-16">
                <Gift className={`w-12 h-12 text-gold-400 mx-auto mb-4 animate-float transition-all duration-1000 ease-out ${isGiftVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                <span className={`text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-semibold transition-all duration-1000 delay-100 ease-out block ${isGiftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Wedding Gift</span>
                <h2 className={`font-serif text-4xl sm:text-5xl font-bold text-gold-100 mt-3 mb-4 transition-all duration-1000 delay-200 ease-out ${isGiftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>Hadiah Kasih Digital</h2>
                <div className={`sparkle-divider mb-6 transition-all duration-1000 delay-300 ease-out ${isGiftVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
                <p className={`text-gold-200/60 leading-relaxed text-lg transition-all duration-1000 delay-400 ease-out ${isGiftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan tanda kasih dan kado secara digital, silakan melalui rekening / e-wallet di bawah ini:
                </p>
              </div>

              {/* Platinum ATM Gift Cards */}
              <div className={`grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto transition-all duration-1000 ${isGiftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                {/* Bank BCA - Platinum Card */}
                <div className="group relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-700 hover:scale-[1.03] cursor-default">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)' }} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Row: Bank Name + Platinum Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-lg font-black tracking-wider text-white/90">BCA</span>
                      <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-gold-300/80 uppercase">Platinum</span>
                    </div>
                    
                    {/* Chip */}
                    <div className="flex items-center gap-4 my-2">
                      <div className="w-12 h-9 rounded-md bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-md">
                        <div className="w-8 h-5 rounded-sm border border-gold-600/50 bg-gradient-to-b from-gold-200/80 to-gold-400/60" />
                      </div>
                    </div>
                    
                    {/* Card Number */}
                    <div className="font-sans text-xl sm:text-2xl font-bold tracking-[0.25em] text-white/95 my-1">
                      8829 9012 88
                    </div>

                    {/* Bottom Row: Name + Copy Button */}
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[10px] text-white/40 uppercase tracking-wider font-sans mb-1">Card Holder</span>
                        <span className="block text-sm font-sans font-bold text-white/80 tracking-wider uppercase">Muhammad Azmi Zein</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard('8829901288', 'bca')}
                        className="flex items-center gap-1.5 bg-gold-400/20 hover:bg-gold-400/40 border border-gold-400/30 text-gold-200 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider font-sans transition-all duration-300"
                      >
                        {copiedBank === 'bca' ? (
                          <><Check className="w-3 h-3" /> Disalin!</>
                        ) : (
                          <><Copy className="w-3 h-3" /> Salin</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bank Mandiri - Platinum Card */}
                <div className="group relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-700 hover:scale-[1.03] cursor-default">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b36] via-[#1a1128] to-[#0d0a1a]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)' }} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Row: Bank Name + Platinum Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-lg font-black tracking-wider text-white/90">MANDIRI</span>
                      <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-gold-300/80 uppercase">Platinum</span>
                    </div>
                    
                    {/* Chip */}
                    <div className="flex items-center gap-4 my-2">
                      <div className="w-12 h-9 rounded-md bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-md">
                        <div className="w-8 h-5 rounded-sm border border-gold-600/50 bg-gradient-to-b from-gold-200/80 to-gold-400/60" />
                      </div>
                    </div>
                    
                    {/* Card Number */}
                    <div className="font-sans text-xl sm:text-2xl font-bold tracking-[0.25em] text-white/95 my-1">
                      1300 0192 8399 9
                    </div>

                    {/* Bottom Row: Name + Copy Button */}
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[10px] text-white/40 uppercase tracking-wider font-sans mb-1">Card Holder</span>
                        <span className="block text-sm font-sans font-bold text-white/80 tracking-wider uppercase">Gina Saskia Mouriska</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard('1300019283999', 'mandiri')}
                        className="flex items-center gap-1.5 bg-gold-400/20 hover:bg-gold-400/40 border border-gold-400/30 text-gold-200 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider font-sans transition-all duration-300"
                      >
                        {copiedBank === 'mandiri' ? (
                          <><Check className="w-3 h-3" /> Disalin!</>
                        ) : (
                          <><Copy className="w-3 h-3" /> Salin</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* 8. FOOTER / CLOSING */}
          <footer className="relative pt-16 pb-12 overflow-hidden bg-royal-dark text-center">
            {/* Fairytale Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay" style={{ backgroundImage: `url(${couple3})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-royal-dark/80 to-transparent pointer-events-none" />
            <FloatingParticles count={15} />
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent animate-shimmer" />
            
            <div className="relative z-10 max-w-3xl mx-auto px-4">
              <Heart className="w-8 h-8 text-gold-400 mx-auto mb-4 animate-heartbeat" />
              <span className="font-script text-5xl text-gold-300 block mb-4 animate-float">Azmi &amp; Gina</span>
              <div className="sparkle-divider mb-6" />
              
              <p className="text-gold-200/60 leading-relaxed italic max-w-lg mx-auto mb-10 text-base">
                &ldquo;Bila insan saling mencinta karena Allah, maka ikatan itu akan memancarkan cahaya keindahan abadi di dunia dan akhirat.&rdquo;
              </p>

              <div className="sparkle-divider mb-8" />

              <p className="text-[11px] font-sans tracking-[0.2em] text-gold-500 uppercase">
                © 2026 Azmi &amp; Gina Wedding Undangan. All rights reserved.
              </p>
            </div>
          </footer>

        </div>
      )}

    </div>
  )
}
