import React from 'react'
import './about.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
function About() {
  return (
    <>
      <Header/>
      <section className='container__about'>
        <div className='container__title'>
          <h1 className='about__title'>ABOUT</h1>
        </div>
        <div className='container__text__about'>
          <p className='about__text'>
          Como seres conviviendo en un mundo digital y en movimiento constante, aunamos el conocimiento del rubro de indumentaria con la ingeniería industrial en busca de la retroalimentación y experimentación constante hacia una nueva identidad circular. El equipo está conformado por profesionales de ambas disciplinas.
          </p>
        </div>
        <Navbar/>
      </section>
      <Footer/>
    </>

  )
}

export default About