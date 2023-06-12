
import React from 'react'
import './onboarding.css'
import {Link} from 'react-router-dom'
function Onboarding() {
  return (
    <div className='container__onboarding'>
      <div className='container__onboarding__text'>
        <h1 className='container__onboarding__text__title'>Title</h1>
        <p className='container__onboarding__text__description'>
          <mark className='text__description__circularid'>CIRCULAR ID</mark> OFFERS A MULTIDISCIPLINARY APPROACH FOCUSED ON SUSTAINABILITY IN ORDER TO TRANSFORM THE FASHION INDUSTRY FROM LINEAR TO CIRCULAR ECONOMY.</p>
          <Link to={`/home`} className='linkToHome'>ENTRAR</Link>
      </div>
      
    </div>
  )
}

export default Onboarding