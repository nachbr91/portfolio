import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <footer className="bg-blue h-auto" id="contact">
      <div className="w-[85vw] mx-auto md:w-[60vw]">
        <p className="text-center text-white mt-0 mb-[2%] pt-2 md:mb-[1%]">
          Reach me out on my social networks!
        </p>
        <div className="flex justify-evenly items-center md:w-[60%] md:mx-auto md:justify-evenly md:items-center">
          <a href="https://wa.me/34665185832" target="_blank" rel="noreferrer">
            <WhatsAppIcon
              className="fill-white hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
              fontSize="large"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nachobenitoroig/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              className="fill-white hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
              fontSize="large"
            />
          </a>
          <a
            href="https://github.com/nachbr91"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              className="fill-white hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
              fontSize="large"
            />
          </a>
          <a href="mailto:ibenitoroig@gmail.com">
            <AlternateEmailIcon
              className="fill-white hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
              fontSize="large"
            />
          </a>
        </div>
        <div className="flex justify-center items-center pt-[1%] pb-[2%] md:pb-[1%]">
          <p className="text-center text-sm text-white my-0">
            © 2022 Created by
          </p>
          <a
            href="https://www.linkedin.com/in/nachobenitoroig/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white ml-[5px] no-underline"
          >
            Nacho Benito
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
