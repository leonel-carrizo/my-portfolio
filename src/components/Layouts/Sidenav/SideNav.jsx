import { useState } from 'react'
import NavLogo from '../../common/NavLogo/NavLogo'
import SideNavMenu from '../../common/SideNavMenu/SideNavMenu'
import { AiOutlineMenu } from 'react-icons/ai'

export const SideNAv = () => {
  const [sidenav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!sidenav)
  }

  return (
    <div className='side-nav'>

      <NavLogo path='/LC-logo-1.1.svg' title='Leonel carrizo' />

      <div onClick={handleNav} className='side-nav__toggle-icon'>
        <AiOutlineMenu />
      </div>

      {
        sidenav
          ? (<SideNavMenu />)
          : ''
      }
    </div>
  )
}
