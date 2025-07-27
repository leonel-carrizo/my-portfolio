import { IconHome, IconPorfolio, IconContact, IconAboutMe } from '../Icons/'

function SideNavMenu () {
  return (
    <>
      <ul className='side-nav__menu'>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <IconHome className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Home</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <IconAboutMe className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>About</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <IconPorfolio className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Portfolio</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <IconContact className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Contact</p>
          </a>
        </li>

      </ul>

    </>
  )
}

export default SideNavMenu
