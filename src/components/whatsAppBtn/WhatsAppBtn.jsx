
import React from 'react'
import "./whatsAppBtn.css"
import {motion} from "framer-motion";
import {IoLogoWhatsapp} from 'react-icons/io5'
function WhatsAppBtn() {
  return (
    <>
        <div className="container__whatsApp">
          <motion.a href="https://api.whatsapp.com/send?phone=5491130862409&text=Hola, ¿cómo estás? Tengo una consulta para hacerte." className="float animate__animated animate__bounceInDown" rel="noreferrer" target="_blank" whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 900, damping: 20 }
          }}>
            <IoLogoWhatsapp className="contact__whatsApp_logo " />
          </motion.a>
        </div> 
    </>
  )
}

export default WhatsAppBtn