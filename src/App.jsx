import { useContext } from 'react'
import Home from './Pages/Home/Home'
import { ThemeConext } from './contexts/ThemeContext'

function App () {
  const theme = useContext(ThemeConext)
  console.log('theme', theme)
  return (
    <div className='theme-dark'>
      <Home />
    </div>
  )
}

export default App
