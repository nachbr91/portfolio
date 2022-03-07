import jsLogo from '../assets/js-logo.svg'
import reactLogo from '../assets/react-logo.svg'
import nodeLogo from '../assets/node-logo.svg'
import expressLogo from '../assets/express-logo.svg'
import mongodbLogo from '../assets/mongodb-logo.svg'
import htmlLogo from '../assets/html-logo.svg'
import cssLogo from '../assets/css-logo.svg'
import tailwindcssLogo from '../assets/tailwindcss-logo.svg'
import postmanLogo from '../assets/postman-logo.png'
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
      img: bootstrapLogo,
      name: 'Bootstrap',
      url: 'https://getbootstrap.com/',
    },
    {
      img: postmanLogo,
      name: 'Postman',
      url: 'https://postman.com/',
    },
  ]

  return (
    <section className="bg-gray h-auto">
      <div className="container">
        <h2 className="text-xl text-center pt-3 mb-1">Stack & Tools</h2>
        <div className="flex flex-wrap justify-evenly pb-3">
          {skillsData.map((skill) => (
            <a
              className="hover:cursor-pointer"
              href={skill.url}
              target="_blank"
              rel="noreferrer"
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
      </div>
    </section>
  )
}

export default Skills
