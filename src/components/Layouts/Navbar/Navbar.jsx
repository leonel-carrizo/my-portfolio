import { useContext, useState } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

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
      <div className='nav__main'>

        <NavLogo title='Leonel carrizo' />
        <MainMenu />
        <ThemeToggleButton onClick={handleTheme} isDark={theme === 'dark'} />

        <div onClick={handleSideNavToggle} className='button__toggle-menu'>
          {isSideNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

      </div>
      {
        isSideNavOpen
          ? (<SideNav />)
          : ''
      }
    </nav>
  )
}

export default Navbar
