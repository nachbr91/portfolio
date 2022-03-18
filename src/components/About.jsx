import picture from '../assets/picture.png'
import certifiedLogo from '../assets/certified-logo.png'

const About = () => {
  return (
    <section
      className="w-[95vw] mx-auto h-auto md:w-[85vw] md:mt-[3%]"
      id="about-me"
    >
      <h2 className="text-xl text-center mb-[2%]">About Me</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <img
          className="rounded-full h-[150px] w-auto mb-[3%] object-contain md:h-[200px]"
          src={picture}
          alt="Nacho Benito"
        />
        <div className="md:w-[60%]">
          <p className="w-[96%] mx-auto text-base text-left tracking-wide mt-0">
            I'm a{' '}
            <span className="font-bold">
              software developer located in Valencia (Spain)
            </span>
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
          <a
            href="https://www.credential.net/feedad41-8d40-4150-bec7-803d12d100c9"
            target="_blank"
            rel="noreferrer"
            className="no-underline text-black"
          >
            <div className="flex transform my-[3%] w-[96%] mx-auto rounded-md items-center shadow-md md:hover:animate-bob md:hover:animate-float md:w-[60%] lg:w-[55%]">
              <div className="mx-auto">
                <img
                  className="h-[80px] w-auto mt-1.5 mb-0 ml-1"
                  src={certifiedLogo}
                  alt="Credential certification logo"
                />
              </div>
              <div className="flex flex-col mx-auto">
                <div className="items-center">
                  <h3 className="text-sm text-center font-bold my-0">
                    Ironhack Graduation Certificate
                  </h3>
                  <p className="text-sm text-center my-0">
                    Web Development Full-Time Bootcamp
                  </p>
                </div>
              </div>
            </div>
          </a>
          <p className="w-[96%] mx-auto text-left tracking-wide my-0">
            From my professional experience in HR, I consider myself as a{' '}
            <span className="font-bold">
              determined, intuitive, creative and colaborative
            </span>{' '}
            person. I adapt quickly to changes, I'm a team player and I'm not
            afraid to step out of my comfort zone.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
