import GitHubIcon from '@mui/icons-material/GitHub'
import portfolioImg from '../assets/temporal.png'

const Projects = () => {
  const projectsData = [
    {
      name: 'Portfolio',
      technologies: [
        'React',
        'JavaScript (ES6)',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'Vercel',
      ],
      url: 'https://nachobenito.vercel.app/',
      githubRepo: 'https://github.com/nachbr91/portfolio',
      img: portfolioImg,
      description: 'My personal website',
    },
    // {
    //   name: 'IronJobs',
    //   technologies: [''],
    //   url: '',
    //   githubRepo: '',
    //   img: {},
    //   description: '',
    // },
    // {
    //   name: '',
    //   technologies: [''],
    //   url: '',
    //   githubRepo: '',
    //   img: {},
    //   description: '',
    // },
    // {
    //   name: '',
    //   technologies: [''],
    //   url: '',
    //   githubRepo: '',
    //   img: {},
    //   description: '',
    // },
  ]

  return (
    <section className="container">
      <h2 className="text-center text-xl">Projects</h2>
      {projectsData.map((project) => (
        <div className="flex flex-wrap" key={project.name}>
          <div className="flex flex-col justify-center flex-1 items-center w-[90%] h-auto mx-auto">
            <img className="w-[320px] h-auto" src={project.img} alt="Project" />
            <h3 className=" font-normal text-center mt-0">{project.name}</h3>
            <div>
              <a
                className="text-black"
                href={project.githubRepo}
                target="_blank"
                rel="author"
                alt="GitHub Repository"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects
