/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import Home from './Pages/Home/Home'

function App () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`theme-${theme}`}>
      <div className='app'>
        <Home />
      </div>
    </div>

  )
}

export default App
