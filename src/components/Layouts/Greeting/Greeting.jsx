import profileData from '../../../data/data.js'
import Button from '../../common/Buttons/Button'
import { IconMail, IconPorfolio } from '../../common/Icons/'

function Greeting () {
  const { nickName, title, contactMail, githubUrl, imgProfile } = profileData
  return (
    <div className='container'>
      <section className='greeting-section'>
        <div className='greeting-section__content'>
          <div>
            <p> Hi I'm <span className='section-name'>{nickName}</span>.</p>
            <p>{title}.</p>
          </div>
          <div className='greeting-section__buttons'>
            <Button
              icon={<IconMail />}
              onClick={() => window.open(`mailto:${contactMail}`, '_parent', 'noopener, noreferer')}
              text='Contact'
            />

            <Button
              icon={<IconPorfolio />}
              onClick={() => window.open(githubUrl, '_blank', 'popup=false, noopener, noreferer')}
              text='Projeccts'
            />
          </div>
        </div>
        <div className='section-img'>
          <img className='profile_img' src={imgProfile} alt='Leonel Profile Picture' />
        </div>
      </section>
    </div>
  )
}

export default Greeting
