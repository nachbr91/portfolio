import { Container } from '@mui/material'
import { Fade } from 'react-reveal'
import Typewriter from 'typewriter-effect'

const Main = () => {
  return (
    <Container>
      <main>
        <h1 className="text-4xl font-normal text-center mt-10 tracking-wide">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("Hi There! I'm <strong>Nacho</strong>.")
                .pauseFor(500)
                .start()
            }}
          />
        </h1>
        <Fade delay={3000}>
          <img
            className="block ml-auto mr-auto h-52 w-auto object-contain rounded-full mt-5"
            src={require('../assets/profile-image.jpeg')}
            alt=""
          />
        </Fade>
        <Fade delay={3050}>
          <h2 className="text-2xl font-normal text-center mt-4 tracking-wide">
            I'm a Junior <strong>Full Stack Developer</strong>.
          </h2>
        </Fade>
      </main>
    </Container>
  )
}

export default Main
