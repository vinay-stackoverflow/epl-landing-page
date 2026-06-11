import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import BowlingBanner from './components/BowlingBanner'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <Hero />
      <About />
      <BowlingBanner />
      <Program />
      <Speakers />
      <FAQ />
      <Registration />
      <footer>
        <p>© 2026 EPAM Premiere League Season 8 · For queries: <span>epltournament@epam.com</span></p>
      </footer>
    </>
  )
}

export default App
