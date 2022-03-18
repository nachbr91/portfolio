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

  const pages = [
    {
      href: '#about-me',
      name: 'About Me',
      target: null,
      rel: null,
    },
    {
      href: '#skills',
      name: 'Stack & Tools',
      target: null,
      rel: null,
    },
    {
      href: '#projects',
      name: 'Projects',
      target: null,
      rel: null,
    },
    {
      href: '#contact',
      name: 'Contact',
      target: null,
      rel: null,
    },
    {
      href: 'https://drive.google.com/file/d/17GmPf7pbLJzE0i5dbdEMGOFytSr1Buuw/view?usp=sharing',
      name: 'Resume',
      target: '_blank',
      rel: 'noreferrer',
    },
  ]

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
            {pages.map((page) => (
              <a
                href={page.href}
                target={page.target}
                rel={page.rel}
                key={page.name}
                className="text-base text-white font-sans font-bold uppercase no-underline mr-3 inline-block relative before:content-[''] before:absolute before:bg-white before:left-0 before:rigth-full before:bottom-0 before:h-0.5 hover:before:right-0"
              >
                {page.name}
              </a>
            ))}
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
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu} key={page.name}>
                  <Link
                    href={page.href}
                    target={page.target}
                    rel={page.rel}
                    underline="none"
                  >
                    <Typography
                      fontFamily="Poppins"
                      color="#000"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  )
}

export default Navbar
