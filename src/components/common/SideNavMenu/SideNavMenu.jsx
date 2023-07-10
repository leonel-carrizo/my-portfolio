import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineContacts } from 'react-icons/ai'

function SideNavMenu () {
  return (
    <>

      <ul className='side-nav__list'>

        <li className='side-nav__item'>
          <a href='#main' className='side-nav__link'>
            <AiOutlineHome className='side-nav__icon' />
            <p className='side-nav__text'>Home</p>
          </a>
        </li>

        <li className='side-nav__item'>
          <a href='#main' className='side-nav__link'>
            <AiOutlineUser className='side-nav__icon' />
            <p className='side-nav__text'>About</p>
          </a>
        </li>

        <li className='side-nav__item'>
          <a href='#main' className='side-nav__link'>
            <AiOutlineProject className='side-nav__icon' />
            <p className='side-nav__text'>Portfolio</p>
          </a>
        </li>

        <li className='side-nav__item'>
          <a href='#main' className='side-nav__link'>
            <AiOutlineContacts className='side-nav__icon' />
            <p className='side-nav__text'>Contact</p>
          </a>
        </li>

      </ul>

    </>
  )
}

export default SideNavMenu
