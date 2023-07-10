import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import Home from './Pages/Home/Home'

function App () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App theme-${theme}`}>
      <Home />
    </div>

  )
}

export default App
