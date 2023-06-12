import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import './contacto.css'
function Contacto() {
  return (
    <>
      <Header />
      <section className='container__contacto'>
        <div className='container__title'>
          <h1 className='about__title'>CONTACTO</h1>
        </div>
        <div className='container__text__contacto'>
          <h2 className='container__text__contacto__title'>
            Let's make fashion circular!
          </h2>
          <p className='container__text__contacto__description'>
            Para que te contemos más sobre nuestros servicios, coordinar una demo o reunirnos por favor contactanos a través de los siguientes medios haciendo click en los íconos:
          </p>
          <div className='container__text__icons'>
            <FaWhatsapp className='whatsAppIcon' />
            <AiOutlineMail className='mailIcon' /> 
          </div>
        </div> 
        <Navbar />
      </section>
      <Footer/>
    </>
  )
}

export default Contacto