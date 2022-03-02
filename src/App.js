import { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'

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
      </ScrollAnimation>
    </Fragment>
  )
}

export default App
