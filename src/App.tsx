import Header from './components/Header'
import Hero from './components/Hero'
import Focus from './components/Focus'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Focus />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
