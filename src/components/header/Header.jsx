import React from "react";
import "./header.css";
import WhatsAppBtn from "../whatsAppBtn/WhatsAppBtn";
import logoCircularID2 from '../../assets/img/logo_circularID2.png'
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <header id="logoHeader" className="header">
        
          <Link to={`/home`} className='logo'><img className="logoImg" src={logoCircularID2} alt='logo'></img></Link>
        
      </header>
      <WhatsAppBtn />
    </>
  )
}

export default Header