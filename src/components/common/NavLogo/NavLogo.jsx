import Logo from '../Logo/logo'

const NavLogo = ({ title }) => {
  return (
    <div className='nav-logo'>

      <a href='#'>
        <Logo className='nav-logo__img' />
      </a>
      <a href='#'>
        <h1 className='nav-logo__title'>{title}</h1>
      </a>
    </div>
  )
}

export default NavLogo
