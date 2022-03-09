import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  return (
    <section className="bg-blue h-auto">
      <div className="container">
        <p className="text-center text-white mt-0 mb-[2%] pt-2 md:mb-[1%]">
          Reach me out on my social networks
        </p>
        <div className="flex justify-evenly items-center md:w-[60%] md:mx-auto md:justify-evenly md:items-center">
          <a href="https://wa.me/34665185832" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="fill-white" fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/nachobenitoroig/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="fill-white" fontSize="large" />
          </a>
          <a
            href="https://github.com/nachbr91"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="fill-white" fontSize="large" />
          </a>
          <a href="mailto:ibenitoroig@gmail.com">
            <AlternateEmailIcon className="fill-white" fontSize="large" />
          </a>
        </div>
        <div className="flex justify-center items-center pt-[1%] pb-[2%]">
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
    </section>
  )
}

export default Footer
