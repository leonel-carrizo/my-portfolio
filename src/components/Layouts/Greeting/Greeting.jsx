function Greeting ({ name }) {
  return (
    <div className='container'>
      <section className='greeting-section'>
        <div className='greeting-section__content'>
          <p> Hi I'm <span className='section-name'>{name}</span>.</p>
          <p>Software developer.</p>
        </div>
        <div className='section-img'>
          <img className='profile_img' src='../../../../src/assets/profile2.png' alt='Leonel Profile Picture' />
        </div>
      </section>
    </div>
  )
}

export default Greeting
