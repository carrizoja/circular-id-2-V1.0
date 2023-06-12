import React, { useState } from "react";
import { motion } from "framer-motion"
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'



const variants = {
  open: { opacity: 1, x: 0, },
  closed: { opacity: 0, x: "100%" }
}
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>    
    <div className="container__navbar">
    <motion.nav
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3 }}
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
               >ABOUT</Link>
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
                >MANIFESTO</Link>
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
              >SERVICIOS</Link>
            </motion.li>
            <motion.li >
              <Link to ="/contacto"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                }
              }
              >CONTACTO</Link>
            </motion.li>
          </ul>
        </motion.div>

      </motion.nav>
      <motion.button
        className="toggle"
        onClick={() => setShow(show => !show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? <CloseIcon /> : <MenuIcon />}

      </motion.button>
   
    </div>
         
    </>

  )
}

export default Navbar