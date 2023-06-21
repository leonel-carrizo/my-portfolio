
const NavLogo = ({ path, title }) => {
  return (
    <div className='nav-logo'>

      <a href='#'>
        <img src={path} alt='logo' className='nav-logo__img' />
      </a>
      <a href='#'>
        <h1 className='nav-logo__title'>{title}</h1>
      </a>
    </div>
  )
}

export default NavLogo
