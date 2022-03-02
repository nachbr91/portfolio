import { Container } from '@mui/material'
import picture from '../assets/picture.png'

const About = () => {
  return (
    <section className="h-screen">
      <Container>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-[200px] w-auto object-contain"
            src={picture}
            alt="Nacho Benito"
          />
          <h2 className="">About Me</h2>
        </div>
      </Container>
    </section>
  )
}

export default About
