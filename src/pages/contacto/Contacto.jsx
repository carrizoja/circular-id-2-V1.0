import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from "framer-motion";
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
            Para que te contemos más sobre nuestros servicios, coordinar una demo o reunirnos; por favor, contactanos a través de los siguientes medios haciendo click en los íconos:
          </p>
          <div className='container__text__icons'>
            <motion.a href="https://api.whatsapp.com/send?phone=5491141768429&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." target='_blank' rel='noreferrer'
             whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 900, damping: 20 }
              }}><FaWhatsapp className='whatsAppIcon'/></motion.a>
            <motion.a href="mailto:contacto@circularid.com.ar" target='_blank' rel='noreferrer'
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 900, damping: 20 }
              }}
             >
            <AiOutlineMail className='mailIcon' />
            </motion.a>
          </div>
        </div> 
        <Navbar />
      </section>
      <Footer/>
    </>
  )
}

export default Contacto