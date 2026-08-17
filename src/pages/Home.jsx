import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import VantaBackground from '../components/VantaBackground'

export default function Home() {
  return (
    <>
      <Hero />
      {/* One shared Vanta.js NET canvas behind every section from here down */}
      <div className="relative">
        <VantaBackground />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  )
}
