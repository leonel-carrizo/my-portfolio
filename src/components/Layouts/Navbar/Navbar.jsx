import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'

import NavLogo from '../../common/NavLogo/NavLogo'
import MainMenu from '../../common/MainMenu/MainMenu'
import { SideNav } from '../Sidenav/SideNav'
import ThemeToggleButton from '../../common/ThemeToggleButton/ThemeToggleButton'

function Navbar () {
  const { handleTheme, theme } = useContext(ThemeContext)

  return (
    <nav className='nav'>
      <div className='nav__main'>
        <NavLogo title='Leonel carrizo' />
        <MainMenu />
        <ThemeToggleButton onClick={handleTheme} isDark={theme === 'dark'} />
      </div>
      <SideNav />
    </nav>
  )
}

export default Navbar
