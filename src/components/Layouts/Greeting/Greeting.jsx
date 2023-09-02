import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'

function Greeting ({ name }){
  const { handleTheme, theme } = useContext(ThemeContext)
  
  return (
    <section className='greeting-section'>
      <div className='greeting-section_content'>
        <p> Hi I'm </p> 
        <h1 className='section-name'>Leonel Carrizo</h1>
        <p>Software developer</p>
      </div>
      <div className='section-img'>
        <img src='../../../../src/assets/profile1.png' alt='Leonel Profile Picture' />
      </div>
    </section>
  )
}

export default Greeting
