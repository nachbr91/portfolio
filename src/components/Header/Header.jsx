import { Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'

const liStyle = 'list-none text-white text-center ml-4'

const Header = () => {
  return (
    // <header className="bg-blue fixed w-screen top-0 h-auto">
    //   <Container>
    //     <nav>
    //       <div className="flex items-center justify-between">
    //         <h3 className="m-0 text-white text-xl">nachbr91</h3>
    //         <ul className="flex items-center">
    //           <li className={liStyle}>About Me</li>
    //           <li className={liStyle}>Projects</li>
    //           <li className={liStyle}>Contact</li>
    //           <li className={liStyle}>Resume</li>
    //           <li className={liStyle}>Language</li>
    //           <li className={liStyle}>Theme Toggle</li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </Container>
    // </header>
    <Navbar />
  )
}

export default Header
