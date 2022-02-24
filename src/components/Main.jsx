import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Fade } from 'react-reveal'
import Typewriter from 'typewriter-effect'
import introImg from '../assets/introduction.svg'
import TechCarousel from './TechCarousel'

const Main = () => {
  const [write, setWrite] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setWrite(true)
    }, 1000)
    clearInterval()
  }, [])

  return (
    <main>
      <Container>
        <div className="flex flex-col justify-center">
          <div>
            <Fade delay={300}>
              <h2 className="text-2xl font-normal text-center mt-8 mb-4 tracking-wide">
                Hi There! I'm <span className="font-bold">Nacho</span>.
              </h2>
            </Fade>
          </div>
          <div>
            <Fade delay={300}>
              <img
                className="w-[80%] h-auto block ml-auto mr-auto "
                src={introImg}
                alt="Person working with a laptop"
              />
            </Fade>
          </div>
        </div>
        {write && (
          <h2 className="text-xl font-normal text-center w-full mt-5 mr-auto ml-auto tracking-wide">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "I'm a Junior <strong>Full-Stack Developer</strong>."
                  )
                  .start()
              }}
            />
          </h2>
        )}
        <TechCarousel />
      </Container>
    </main>
  )
}

export default Main
