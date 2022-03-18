import { useState } from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <nav>
      <AppBar position="static" className="bg-blue">
        <Toolbar
          disableGutters
          className="w-[95vw] mx-auto md:w-[85vw] lg:w-[70vw]"
        >
          <a href="https://nachobenito.dev" target="_blank" rel="noreferrer">
            <img
              className="h-7 w-auto ml-2"
              src={require('../assets/logo.png')}
              alt="Nacho Benito Logo"
            />
          </a>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            <a
              href="#about-me"
              className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
            >
              Stack & Tools
            </a>
            <a
              href="#projects"
              className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
            >
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/17GmPf7pbLJzE0i5dbdEMGOFytSr1Buuw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
            >
              Resume
            </a>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-navbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-navbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#about-me" underline="none">
                  <Typography
                    fontFamily="Poppins"
                    color="#000"
                    textAlign="center"
                  >
                    About Me
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#skills" underline="none">
                  <Typography
                    fontFamily="Poppins"
                    color="#000"
                    textAlign="center"
                  >
                    Stack & Tools
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#projects" underline="none">
                  <Typography
                    fontFamily="Poppins"
                    color="#000"
                    textAlign="center"
                  >
                    Projects
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="#contact" underline="none">
                  <Typography
                    fontFamily="Poppins"
                    color="#000"
                    textAlign="center"
                  >
                    Contact
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  href="https://drive.google.com/file/d/17GmPf7pbLJzE0i5dbdEMGOFytSr1Buuw/view?usp=sharing"
                  target="_blank"
                  underline="none"
                >
                  <Typography
                    fontFamily="Poppins"
                    color="#000"
                    textAlign="center"
                  >
                    Resume
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar
