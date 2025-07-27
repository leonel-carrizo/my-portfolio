import { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { IconMenu, IconCloseMenu } from '../../common/Icons/'

import NavLogo from '../../common/NavLogo/NavLogo'
import MainMenu from '../../common/MainMenu/MainMenu'
import SideNav from '../Sidenav/SideNav'
import ThemeToggleButton from '../../common/ThemeToggleButton/ThemeToggleButton'

function Navbar () {
  const { handleTheme, theme } = useContext(ThemeContext)
  const [isSideNavOpen, setSideNavOpen] = useState(false)

  const handleSideNavToggle = () => {
    setSideNavOpen(!isSideNavOpen)
  }

  return (
    <nav className='nav'>
      <div className='container'>
        <NavLogo title='Leonel carrizo' />
        <div className='nav__main'>
          <MainMenu />
        </div>
        <ThemeToggleButton onClick={handleTheme} isDark={theme === 'dark'} />
        <div onClick={handleSideNavToggle} className='button__toggle-menu'>
          {isSideNavOpen ? <IconCloseMenu /> : <IconMenu />}
        </div>
        {isSideNavOpen ? (<SideNav />) : ''}
      </div>
    </nav>
  )
}

export default Navbar
