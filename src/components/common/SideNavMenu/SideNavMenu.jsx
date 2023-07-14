import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'

function SideNavMenu () {
  return (
    <>
      <ul className='side-nav__menu'>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <AiOutlineHome className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Home</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <AiOutlineUser className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>About</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <AiOutlineProject className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Portfolio</p>
          </a>
        </li>

        <li className='side-nav__menu-item'>
          <a href='#main' className='side-nav__menu-link'>
            <AiOutlineContacts className='side-nav__menu-icon' />
            <p className='side-nav__menu-text'>Contact</p>
          </a>
        </li>

      </ul>

    </>
  )
}

export default SideNavMenu
