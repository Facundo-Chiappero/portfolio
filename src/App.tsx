import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProjectSection from './components/Project/ProjectSection'
import Skill from './components/Skills/Skill'
import Studies from './components/Studies/Studies'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Experience />
        <Studies />
        <ProjectSection />
        <About />
        <Skill />
        <Footer />
      </div>
    </>
  )
}

export default App
