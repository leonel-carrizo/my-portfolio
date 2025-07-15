import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import SideNavMenu from '../../common/SideNavMenu/SideNavMenu'
import ThemeToggleButton from '../../common/ThemeToggleButton/ThemeToggleButton'

const SideNav = () => {
  const { handleTheme, theme } = useContext(ThemeContext)
  return (
    <div className='side-nav'>
      <ThemeToggleButton onClick={handleTheme} isDark={theme === 'dark'} />
      <SideNavMenu />
    </div>
  )
}
export default SideNav
