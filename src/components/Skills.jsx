import { Container } from '@mui/material'
import jsLogo from '../assets/js-logo.svg'
import reactLogo from '../assets/react-logo.svg'
import nodeLogo from '../assets/node-logo.svg'
import expressLogo from '../assets/express-logo.svg'
import mongodbLogo from '../assets/mongodb-logo.svg'
import htmlLogo from '../assets/html-logo.svg'
import cssLogo from '../assets/css-logo.svg'
import tailwindcssLogo from '../assets/tailwindcss-logo.svg'
import postmanLogo from '../assets/postman-logo.png'
import muiLogo from '../assets/mui-logo.png'
import bootstrapLogo from '../assets/bootstrap-logo.svg'

const Skills = () => {
  const skillsData = [
    {
      img: jsLogo,
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    },
    {
      img: reactLogo,
      name: 'React',
      url: 'https://reactjs.org/',
    },
    {
      img: nodeLogo,
      name: 'Node.js',
      url: 'https://nodejs.org/en/',
    },
    {
      img: expressLogo,
      name: 'Express',
      url: 'https://expressjs.com/',
    },
    {
      img: mongodbLogo,
      name: 'MongoDB',
      url: 'https://www.mongodb.com/',
    },
    {
      img: htmlLogo,
      name: 'HTML5',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML',
    },
    {
      img: cssLogo,
      name: 'CSS3',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS',
    },
    {
      img: tailwindcssLogo,
      name: 'tailwindcss',
      url: 'https://tailwindcss.com/',
    },
    {
      img: postmanLogo,
      name: 'Postman',
      url: 'https://postman.com/',
    },
    {
      img: muiLogo,
      name: 'MUI',
      url: 'https://mui.com/',
    },
    {
      img: bootstrapLogo,
      name: 'Bootstrap',
      url: 'https://getbootstrap.com/',
    },
  ]

  return (
    <section className="bg-gray h-auto">
      <Container>
        <h2 className="text-xl text-center pt-3 mb-0">Stack & Tools</h2>
        <div className="flex flex-wrap justify-evenly pb-3">
          {skillsData.map((skill) => (
            <a
              className="hover:cursor-pointer"
              href={skill.url}
              target="_blanck"
              key={skill.name}
            >
              <img
                className="h-[60px] w-auto mt-[20%] mb-[10%] mx-2"
                src={skill.img}
                alt={skill.name}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
