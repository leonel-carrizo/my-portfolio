import { FiSun, FiMoon } from 'react-icons/fi'

function ThemeToggleButton ({ onClick, isDark }) {
  return (
    <div className='toggle-button' onChange={onClick}>
      <input className='toggle-button__input' type='checkbox' id='darkmode-toggle' checked={isDark} />
      <label className='toggle-button__label' htmlFor='darkmode-toggle'>
        <FiMoon className='moon' />
        <FiSun className='sun' />
      </label>

    </div>

  )
}

export default ThemeToggleButton
