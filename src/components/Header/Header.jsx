import { Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
