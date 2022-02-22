import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Fade } from 'react-reveal'
import Typewriter from 'typewriter-effect'
import logo from '../assets/main-logo.svg'

const Main = () => {
  const [write, setWrite] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setWrite(true)
    }, 2000)
    clearInterval()
  }, [])

  return (
    <main>
      <Container>
        <div className="flex flex-col justify-center">
          <div>
            <Fade delay={500}>
              <h2 className="text-2xl font-normal text-center mt-8 mb-4 tracking-wide">
                Hi There! I'm <strong>Nacho</strong>.
              </h2>
            </Fade>
          </div>
          <div>
            <Fade delay={500}>
              <img
                className="w-4/5 h-auto block ml-auto mr-auto "
                src={logo}
                alt="Logo"
              />
            </Fade>
          </div>
        </div>
        {write && (
          <h2 className="text-2xl font-normal text-center w-4/5 mt-4 mr-auto ml-auto tracking-wide">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "I'm a Junior <strong>Full Stack Developer</strong>."
                  )
                  .start()
              }}
            />
          </h2>
        )}
      </Container>
    </main>
  )
}

export default Main
