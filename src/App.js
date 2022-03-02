import { Fragment } from 'react'
import About from './components/About'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <About />
    </Fragment>
  )
}

export default App
