import { Container } from '@mui/material'
import Typewriter from 'typewriter-effect'

const Main = () => {
  return (
    <Container>
      <main>
        <div className="text-4xl text-center mt-10 tracking-wide">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi There! I'm <strong>Nacho</strong>.")
                .pauseFor(500)
                .deleteChars(6)
                .pauseFor(300)
                .typeString('a Junior Full Stack Web Developer.')
                .start()
            }}
          />
          <div className="text-4xl text-center mt-8 tracking-wide"></div>
        </div>
      </main>
    </Container>
  )
}

export default Main
