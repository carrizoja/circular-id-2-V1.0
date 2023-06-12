import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import "./navbarHome.css";
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const variants = {
  open: { opacity: 1, x: 0, },
  closed: { opacity: 0, x: "100%" }
}
const NavbarHome = () => {
 
  const [show, setShow] = useState(true);
  const mq = window.matchMedia("(max-width: 1023px)");
  /*  If I use a mobile device, set use State setShow to false using useEffect */ 
  useEffect(() => {
    if (mq.matches) {
      setShow(false)
    }
  }, [mq.matches])

  const [styleVectorGreen, setStyleVectorGreen] = useState({display:'block'})
  const [styleVectorPurple, setStyleVectorPurple] = useState({display:'none'})
 
  return (
    <>
    <div className="container__navbar__Home">
    <motion.nav
      animate={show ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0 }}
      >
        <motion.div className="inner-nav">
          <ul id="navlinks">
            <motion.li >
              <Link to="/about"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                }}
               onMouseEnter={e => {
                setStyleVectorGreen({display:'none'})
                setStyleVectorPurple({display:'flex'})
              }} onMouseLeave={e => {
                setStyleVectorGreen({display:'flex'})
                setStyleVectorPurple({display:'none'})               
              }}>ABOUT</Link>
            </motion.li>
            <motion.li >
              <Link to ="/manifiesto"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                }}
               onMouseEnter={e => {
                setStyleVectorGreen({display:'none'})
                setStyleVectorPurple({display:'flex'})
              }} onMouseLeave={e => {
                setStyleVectorGreen({display:'flex'})
                setStyleVectorPurple({display:'none'})
                
              }}>MANIFESTO</Link>
            </motion.li>
            <motion.li >
              <Link to ="/servicios"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                }}
               onMouseEnter={e => {
                setStyleVectorGreen({display:'none'})
                setStyleVectorPurple({display:'flex'})
              }} onMouseLeave={e => {
                setStyleVectorGreen({display:'flex'})
                setStyleVectorPurple({display:'none'})
                
              }}>SERVICIOS</Link>
            </motion.li>
            <motion.li >
              <Link to ="/contacto"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                }}
               onMouseEnter={e => {
                setStyleVectorGreen({display:'none'})
                setStyleVectorPurple({display:'flex'})
              }} onMouseLeave={e => {
                setStyleVectorGreen({display:'flex'})
                setStyleVectorPurple({display:'none'})              
              }}>CONTACTO</Link>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className="toggleHome"
        onTap={() => setShow(show => !show)}
        whileTap={{ scale: 1.1 }}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </motion.button>   
    </div>
      <div className="container__vector">
        <img style={styleVectorGreen} className="vectorGreen" src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1684102794/svgs/green_vector_czehfq.svg" alt="green vector" />
        <img style={styleVectorPurple} className="vectorPurple" src="https://res.cloudinary.com/ijac-it-solutions/image/upload/v1683859659/svgs/vector_pv2c3e.svg" alt="vector cold purple"></img>
      </div>
    </>

  )
}

export default NavbarHome