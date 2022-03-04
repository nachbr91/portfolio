import { Container } from '@mui/material'
import picture from '../assets/picture.png'
import certifiedLogo from '../assets/certified-logo.png'

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
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="w-[96%] mx-auto text-base text-left tracking-wide mt-0">
            I'm a{' '}
            <span className="font-bold">
              software developer located in Valencia (Spain)
            </span>{' '}
            . I'm focused on both Front-end and Back-end technologies.
          </p>
          <p className="w-[96%] mx-auto text-base text-left tracking-wide mt-0">
            I'm a coding enthusiast and I'm highly interested about technology,
            computers and videogames.
          </p>
          <p className="w-[96%] mx-auto text-base text-left tracking-wide my-0">
            After many years of wanting to learn how to develop web
            applications, I finally decided to take the leap and become{' '}
            <span className="font-bold">Web Developer</span>.
          </p>
          <div className="flex w-[96%] my-[3%] mx-auto rounded-md shadow">
            <a
              href="https://www.credential.net/feedad41-8d40-4150-bec7-803d12d100c9"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-[80px] w-auto mt-1.5 mb-0 ml-1"
                src={certifiedLogo}
                alt="Credential certification logo"
              />
            </a>
            <a
              href="https://www.credential.net/feedad41-8d40-4150-bec7-803d12d100c9"
              target="_blanck"
              rel="noreferrer"
              className="no-underline text-black"
            >
              <div className="flex flex-col items-center mt-1">
                <h3 className="text-sm font-bold mb-0">
                  Ironhack Graduation Certificate
                </h3>
                <p className="text-sm text-center mt-0">
                  Web Development Full-Time Bootcamp
                </p>
              </div>
            </a>
          </div>
          <p className="w-[96%] mx-auto text-left tracking-wide mt-0">
            From my professional experience in HR, I consider myself as a{' '}
            <span className="font-bold">
              determined, intuitive, creative and colaborative
            </span>{' '}
            person. I adapt quickly to changes, I'm a team player and I'm not
            afraid to step out of my comfort zone.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About
