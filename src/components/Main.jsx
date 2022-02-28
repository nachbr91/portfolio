import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Fade } from 'react-reveal'
import Typewriter from 'typewriter-effect'
import introImg from '../assets/introduction.svg'
import TechCarousel from './TechCarousel'
import SwipeUpIcon from '@mui/icons-material/SwipeUp'

const Main = () => {
  const [write, setWrite] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setWrite(true)
    }, 1000)
    clearInterval()
  }, [])

  useEffect(() => {
    setInterval(() => {
      setHidden(false)
    }, 4250)
    clearInterval()
  }, [])

  return (
    <main>
      <Container>
        <Fade delay={300}>
          <h2 className="text-2xl font-normal text-center mt-6 mb-4 tracking-wide">
            Hi There! I'm <span className="font-bold">Nacho</span>
          </h2>
        </Fade>
        <Fade delay={300}>
          <img
            className="w-[80%] h-auto block ml-auto mr-auto "
            src={introImg}
            alt="Person working with a laptop"
          />
        </Fade>
        {write && (
          <h2 className="text-xl font-normal text-center w-full mt-5 mr-auto ml-auto tracking-wide">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(65)
                  .typeString(
                    "I'm a Junior <strong>Full-Stack Developer</strong>"
                  )
                  .start()
              }}
            />
          </h2>
        )}
        <TechCarousel />
        {!hidden && (
          <div className="animate-bounce text-blue text-center mt-[200px]">
            <SwipeUpIcon sx={{ width: 65, height: 65 }} />
          </div>
        )}
      </Container>
    </main>
  )
}

export default Main
