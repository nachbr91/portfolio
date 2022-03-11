import CodeIcon from '@mui/icons-material/Code'
import PreviewIcon from '@mui/icons-material/Preview'
import portfolioImg from '../assets/temporal.png'
import ironjobsImg from '../assets/ironjobs.png'
import f1appImg from '../assets/f1app.png'
import ironslugImg from '../assets/ironslug.png'

const Projects = () => {
  const projectsData = [
    {
      name: 'Portfolio',
      technologies: ['React | Tailwind CSS | Responsive | Vercel'],
      url: 'https://nachobenito.dev/',
      githubRepo: 'https://github.com/nachbr91/portfolio',
      img: portfolioImg,
      description:
        "My personal website where I will be posting my personal projects, what I'm currently learning, interests, etc.",
    },
    {
      name: 'IronJobs',
      technologies: [
        'React | Node.js | Express | MongoDB | Ant Design | CSS3 | Heroku',
      ],
      url: 'https://ironjobs-app.herokuapp.com/',
      githubRepo: 'https://github.com/IronSell/IronJobs-App',
      img: ironjobsImg,
      description:
        'My final project for Ironhack which I made with two classmates. IronJobs is a Full Stack Web Application where you can access as a candidate or as a company and see posted job vacancies and registered candidates. The actual version is for desktop only, but a responsive version will be released soon.',
    },
    {
      name: 'F1 App',
      technologies: [
        'JavaScript (ES6) | Rest API | Responsive | Node.js | Express | MongoDB | Passport | HTML5 | CSS3 | Bootstrap | Handlebars | Heroku',
      ],
      url: 'https://myapp-f1.herokuapp.com/',
      githubRepo: 'https://github.com/nachbr91/Project_2-Ironhack',
      img: f1appImg,
      description:
        'My second project for Ironhack. F1 App is a Full Stack Web Application where you can find all the info about the F1 2021 season.',
    },
    {
      name: 'Iron Slug',
      technologies: ['JavaScript (ES6) | Canvas | HTML5 | CSS3'],
      url: 'https://nachbr91.github.io/IronHack-Project_1/',
      githubRepo: 'https://github.com/nachbr91/IronHack-Project_1',
      img: ironslugImg,
      description:
        "My first project for Ironhack. Iron Slug is a videogame using canvas and vanilla JavaScript. It's a classic shooter inspired in Metal Slug and developed for playing on a desktop computer.",
    },
  ]

  return (
    <section className="w-[90vw] mx-auto h-auto md:w-[70vw]" id="projects">
      <h2 className="text-center text-xl">Projects</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {projectsData.map((project) => (
          <div
            className="flex flex-col justify-center items-center h-auto mx-auto border-[3px] border-solid rounded-lg border-dark-gray mb-[5%] md:w-[45%] md:h-fit"
            key={project.name}
          >
            <img
              className="w-full h-auto md:h-[250px] md:object-fit"
              src={project.img}
              alt="Project"
            />
            <hr className="w-full border-2 border-solid border-dark-gray rounded-lg mt-0 mb-1" />
            <h3 className=" font-normal mt-0 mb-[1%]">{project.name}</h3>
            <p className="text-center text-sm text-blue font-bold my-[1%]">
              {project.technologies}
            </p>
            <p className="mt-[1%] mb-[2%] w-[95%] text-center">
              {project.description}
            </p>
            <div className="flex w-[150px] justify-evenly">
              <a
                className="text-blue hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
                href={project.githubRepo}
                target="_blank"
                rel="noreferrer"
                alt="GitHub Repository"
              >
                <CodeIcon fontSize="large" />
              </a>
              <a
                className="text-blue hover:animate-bob hover:animate-float focus:animate-bob focus:animate-float active:animate-bob active:animate-float"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                alt="GitHub Repository"
              >
                <PreviewIcon fontSize="large" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
