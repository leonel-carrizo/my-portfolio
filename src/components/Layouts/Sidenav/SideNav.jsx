import { useState } from 'react'
import NavLogo from '../../common/NavLogo/NavLogo'
import SideNavMenu from '../../common/SideNavMenu/SideNavMenu'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const SideNav = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false)

  const handleSideNavToggle = () => {
    setSideNavOpen(!isSideNavOpen)
  }

  return (
    <div className='side-nav'>

      <NavLogo title='Leonel carrizo' />

      <div onClick={handleSideNavToggle} className='side-nav__toggle-icon'>
        {isSideNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {
        isSideNavOpen
          ? (<SideNavMenu />)
          : ''
      }
    </div>
  )
}
