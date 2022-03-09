import { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <ScrollAnimation
        offset={0}
        animateIn="animate-fadeIn"
        animatePreScroll={false}
      >
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ScrollAnimation>
    </Fragment>
  )
}

export default App
