import { Fragment, useEffect, useState } from 'react'
import { Fade } from 'react-reveal'

const TechCarousel = () => {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setHidden(false)
    }, 3800)
    clearInterval()
  }, [])

  return (
    <Fragment>
      {!hidden && (
        <div className="mt-5">
          <Fade>
            <div className="h-[29px] overflow-hidden">
              <div className="h-full animate-carousel">
                <div className="h-[29px] text-2xl text-blue font-bold flex flex-col items-center">
                  JavaScript (ES6)
                </div>
                <div className="h-[29px]  text-2xl text-blue font-bold flex flex-col items-center">
                  MongoDB
                </div>
                <div className="h-[29px]  text-2xl text-blue font-bold flex flex-col items-center">
                  Express
                </div>
                <div className="h-[29px]  text-2xl text-blue font-bold flex flex-col items-center">
                  Node.js
                </div>
                <div className="h-[29px]  text-2xl text-blue font-bold flex flex-col items-center">
                  React
                </div>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </Fragment>
  )
}

export default TechCarousel
