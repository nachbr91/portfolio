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
    <main className="w-[95vw] mx-auto md:w-[85vw] lg:w-[70vw]">
      <div className="md:flex md:flex-col md:mt-[3%] md:ml-[2%]">
        <div>
          <Fade delay={300}>
            <h2 className="text-2xl font-normal text-center tracking-wide md:hidden">
              Hi There! I'm <span className="font-bold">Nacho</span>
            </h2>
          </Fade>
        </div>
        <div className="md:flex justify-center">
          <div className="md:mt-[3%] md:w-[50%] text-center">
            <Fade delay={300}>
              <img
                className="w-[250px] h-auto block ml-auto mr-auto md:w-full md:h-auto md:m-0 md:object-contain lg:ml-[20%]"
                src={introImg}
                alt="Person working with a laptop"
              />
            </Fade>
          </div>
          <div className="md:mt-[2%] md:ml-[2%] md:w-[60%] lg:ml-[10%]">
            <Fade delay={300} className="sm:hidden">
              <h2 className="sm:hidden text-2xl font-normal">
                Hi There! I'm <span className="font-bold">Nacho</span>
              </h2>
            </Fade>
            {isWrite && (
              <h2 className="text-xl font-normal text-center w-full mr-auto ml-auto tracking-wide md:text-xl md:text-left md:w-full">
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
          </div>
        </div>
      </div>
      <div>
        {!isHidden && (
          <div className="animate-fadeIn">
            <p className="text-xl text-center mt-[6%] mx-auto w-[60%] md:hidden">
              Swipe Up to know me better!
            </p>
            <p className="text-xl text-center mt-[4%] mx-auto w-[60%] mb-0 sm:hidden">
              Scroll Down to know me better!
            </p>
            <div className="animate-bounce text-blue text-center mt-[10%] md:hidden">
              <SwipeUpIcon sx={{ width: 60, height: 60 }} />
            </div>
            <div className="flex justify-center items-center text-blue text-center mt-[1%] sm:hidden">
              <MouseOutlined sx={{ width: 40, height: 40 }} />
              <ArrowCircleDownOutlined
                className="animate-bounce mt-[1%]"
                sx={{ width: 30, height: 30 }}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Main
