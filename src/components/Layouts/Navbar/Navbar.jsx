import NavLogo from '../../common/NavLogo/NavLogo'
import MainMenu from '../../common/MainMenu/MainMenu'
import { SideNAv } from '../Sidenav/SideNav'

function Navbar () {
  return (
    <nav className='nav'>
      <div className='nav__main'>
        <NavLogo path='/LC-logo-1.1.svg' title='Leonel carrizo' />
        <MainMenu />
      </div>
      <SideNAv />
    </nav>
  )
}

export default Navbar
