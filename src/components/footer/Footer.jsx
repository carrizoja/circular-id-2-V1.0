import React from 'react'
import "./footer.css";
import { motion } from "framer-motion";
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import logoCircularID2 from '../../assets/img/logo_circularID2.png'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer >
        <figure className='figure'></figure>
        <div className='container__grid'>
          <div className='container__logo'>
            <a href='#logoHeader'  className='footer__logo'><img src={logoCircularID2} alt='logo'></img></a>
          </div>
          <div className='footer__socials'>
            <div className='container__contactData'>
              <small>contacto@circularid.com.ar</small>
              <small>+54911 40 55 3303</small>
            </div>
            <div className='container__socialIcons'>
              <motion.a href="mailto:contacto@circularid.com.ar" target='_blank' rel='noreferrer' whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 900, damping: 20 }
              }}><AiOutlineMail className='footer__icon' /></motion.a>
              <motion.a href="https://api.whatsapp.com/send?phone=5491141768429&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." target='_blank' rel='noreferrer' whileHover={{
                scale: 1.2,
                transition: { type: "spring", stiffness: 900, damping: 20 }
              }} ><FaWhatsapp className='footer__icon' /></motion.a>
            </div>
          </div>
          <div className='container__permalinks'>
            <ul className='permalinks'>                   
              <Link to ="/about"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                
                }}           
               >ABOUT</Link>
              <Link to ="/manifiesto"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                
                }}           >MANIFESTO</Link>
              <Link to ="/servicios"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                
                }}           >SERVICIOS</Link>
              <Link to ="/contacto"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                
                }}           >CONTACTO</Link>
            </ul>
          </div>
        </div>
        <figure className='figure2'></figure>
        <div className='footer__copyright'>
          <small>&copy; Circular ID. All rights reserved 2023 </small>
        </div>

      </footer>
    </>
  )
}

export default Footer;