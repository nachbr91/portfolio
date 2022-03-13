import { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import Typewriter from 'typewriter-effect'
import introImg from '../assets/introduction.svg'
import TechCarousel from './TechCarousel'
import SwipeUpIcon from '@mui/icons-material/SwipeUp'
import MouseOutlined from '@mui/icons-material/MouseOutlined'
import ArrowCircleDownOutlined from '@mui/icons-material/ArrowCircleDownOutlined'

const Main = () => {
  const [isWrite, setIsWrite] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsWrite(true)
    }, 1000)
    clearInterval()
  }, [])

  useEffect(() => {
    setInterval(() => {
      setIsHidden(false)
    }, 4300)
    clearInterval()
  }, [])

  return (
    <main className="w-[95vw] mx-auto md:w-[70vw]">
      <Fade delay={300}>
        <h2 className="text-2xl font-normal text-center tracking-wide">
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
      {isWrite && (
        <h2 className="text-xl font-normal text-center w-full mr-auto ml-auto tracking-wide">
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
      {!isHidden && (
        <div className="animate-fadeIn">
          <p className="text-xl text-center mt-[6%] mx-auto w-[60%] md:hidden">
            Swipe Up to know me better!
          </p>
          <p className="text-xl text-center mt-[6%] mx-auto w-[60%] sm:hidden">
            Scroll Down to know me better!
          </p>
          <div className="animate-bounce text-blue text-center mt-[10%] md:hidden">
            <SwipeUpIcon sx={{ width: 60, height: 60 }} />
          </div>
          <div className="flex justify-center items-center text-blue text-center mt-[2%] sm:hidden">
            <MouseOutlined sx={{ width: 60, height: 60 }} />
            <ArrowCircleDownOutlined
              className="animate-bounce mt-[1%]"
              sx={{ width: 40, height: 40 }}
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default Main
