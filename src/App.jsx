import './App.css'
import { LanguageProvider, useLang } from './LanguageContext'
import translations from './translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BowlingBanner from './components/BowlingBanner'
import Program from './components/Program'
import Speakers from './components/Speakers'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function AppContent() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <BowlingBanner />
      <Program />
      <Speakers />
      <Gallery />
      <FAQ />
      <Registration />
      <footer>
        <p>{t.footer} <span>epltournament@epam.com</span></p>
      </footer>
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
