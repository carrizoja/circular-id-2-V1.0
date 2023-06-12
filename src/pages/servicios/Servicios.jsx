
import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import './servicios.css'
import stick from '../../assets/img/Arrow 1.png'


function Servicios() {

  const inputRef = useRef();


  useEffect(() => {
    /* obtain coordinates from id or class = digitalizacion__coordinates */

    const x = inputRef.current.offsetLeft;
    const y = inputRef.current.offsetTop;

    console.log(x, y);
  }, []);


  /* svg__circle rotation */
  const [isActive, setIsActive] = React.useState(false);

  const [text, setText] = useState(
    <p>Nuestros servicios se enfocan en soluciones prácticas, interactivas y personalizadas que ayudan a las empresas de moda a reducir su impacto ambiental, potenciar su marketplace y a su vez creando valor económico y social.</p>
  );
  const [isDivEnabled, setIsDivEnabled] = useState(false);
  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()

  /*  Onclicks functions for differents services */

  const handleClickIntervencion = () => {
    setIsDivEnabled(!isDivEnabled);
    /* create a function that rotates the svg__circle */
    setText(
      <>
        <style>
          {/* set .button__servicio visibility to visible */}
          {`.button__servicio {
          visibility: visible;
        } 
        .text__click {
          display:none;
        }
        .svg__firulete {
          transform: rotate(-72deg);
          transition-duration: 1.5s;
        }
        .svg__titles {
          transition-duration: 1.5s;
        }
        .reutilizacion__small__title {
          transform: translateX(-281px)translateY(285px);
         
        }
    
        .digitalizacion__small__title {
          transform: translateX(-345px)translateY(145px);
        }

        .reduccion__small__title { 
          transform: translateX(-148px)translateY(285px);
        }

        .analisis__small__title {
          transform: translateX(-75px)translateY(148px); 
        }

        .intervencion__small__title {
          transform: translateX(-215px)translateY(50px);   
        }

        @media only screen and (max-width:767px){
          .stick {
            top: 67.5%;      
          }
          .reutilizacion__small__title {
            transform: translateX(-200px)translateY(205px);
          }
          .digitalizacion__small__title {
            transform: translateX(-245px)translateY(100px);
          }
          .reduccion__small__title {
            transform: translateX(-100px)translateY(205px);
          }
          .analisis__small__title {
                  transform: translateX(-55px)translateY(100px);
          }
           .intervencion__small__title {
              transform: translateX(-155px)translateY(40px);
             }                    
        }

        /* Media Query for Tablet */
        @media only screen and (min-width: 768px) and (max-width:1023px) {
          .intervencion__small__title {
            transform: translateX(-240px)translateY(55px);
            }
          .analisis__small__title {
            transform: translateX(-75px)translateY(168px);
            }
          .digitalizacion__small__title {
              transform: translateX(-385px)translateY(168px);
            }
          .reduccion__small__title {
              transform: translateX(-155px)translateY(325px);
            }
          .reutilizacion__small__title {
              transform: translateX(-300px)translateY(325px);
            }

        }
        /* CSS for Desktop with large screen */
        @media only screen and (min-width:1301px) {
          .reutilizacion__small__title {
            font-size: 11px;
            transform: translateX(-310px)translateY(325px);
          }
          .intervencion__small__title {
            font-size: 11px;
            transform: translateX(-240px)translateY(60px);
          }
          .analisis__small__title {
          
            font-size: 11px; 
            transform: translateX(-80px)translateY(165px);
          }
          .reduccion__small__title {
            font-size: 11px;
            transform: translateX(-160px)translateY(325px);
          }
          .digitalizacion__small__title {
            font-size: 11px;
            transform: translateX(-385px)translateY(165px);
          }
        }
      

        
        `}

        </style>
        <div className='container__intervencionOnline'>
          <figure className='green_figure'></figure>
          <p className='intervencionOnline__text'>INTERVENCIÓN ONLINE en el sitio web de las marcas para mejorar la experiencia online. El cliente podrá probarse las prendas de forma virtual, optimizando la decisión de compra.</p>
        </div>
        <p className='servicioDisponible__text'>Este servicio ya se encuentra disponible.</p>

      </>
    )

  }

  const handleClickReutilizacion = () => {
    setIsDivEnabled(false);
    setText(
      <>
        <style>
          {`
        .svg__firulete {
          transform: rotate(-288deg);
          transition-duration: 1.5s;
        }
        .svg__titles {
          transition-duration: 1.5s;
        }

        .reutilizacion__small__title {
          transform: translateX(-215px)translateY(50px);
         
        }
    
        .digitalizacion__small__title {
          transform: translateX(-90px)translateY(148px);
        }

        .reduccion__small__title { 
          transform: translateX(-335px)translateY(150px);
        }

        .analisis__small__title {
          transform: translateX(-260px)translateY(285px); 
        }

        .intervencion__small__title {
          transform: translateX(-155px)translateY(285px);   
        }

        @media only screen and (max-width:767px){
          .stick {
            top: 60%;      
          }

          .reutilizacion__small__title {
            transform: translateX(-155px)translateY(40px);
          }
          .digitalizacion__small__title {
            transform: translateX(-67px)translateY(100px);
          }
          .reduccion__small__title {
            transform: translateX(-240px)translateY(100px);
          }
          .analisis__small__title {
            transform: translateX(-180px)translateY(205px);
          }
          .intervencion__small__title {
            transform: translateX(-110px)translateY(205px);
          }
        }

        /* Media Query for Tablet */
        @media only screen and (min-width: 768px) and (max-width:1023px) {
          .intervencion__small__title {
            transform: translateX(-170px)translateY(325px);
            }
          .analisis__small__title {
            transform: translateX(-285px)translateY(325px);
            }
          .digitalizacion__small__title {
              transform: translateX(-100px)translateY(165px);
            }
          .reduccion__small__title {
              transform: translateX(-375px)translateY(165px);
            }
          .reutilizacion__small__title {
              transform: translateX(-240px)translateY(60px);
            }

        }

        /* CSS for Desktop with large screen */
        @media only screen and (min-width:1301px) {
          .reutilizacion__small__title {
            transform: translateX(-235px)translateY(60px);
          }
          .intervencion__small__title {
            transform: translateX(-160px)translateY(325px);
          }
          .analisis__small__title {
            transform: translateX(-285px)translateY(325px);
          }
          .reduccion__small__title {
            transform: translateX(-375px)translateY(165px);
          }
          .digitalizacion__small__title {
            transform: translateX(-95px)translateY(165px);
          }
        }

        `}
        </style>
        <div className='container__othersOnline'>
          <figure className='green_figure'></figure>
          <p className='othersOnline__text'>REUTILIZACIÓN a través de la reinserción de mercadería remanente y reciclado de fibras en el sistema, conformando una economía circular.</p>
        </div>
        <p className='servicioNoDisponible__text'>Estamos trabajando en el desarrollo de este servicio.</p>

      </>
    );
  }

  const handleClickReduccion = () => {
    setIsDivEnabled(false);
    setText(
      <>
        <style>
          {`
        .svg__firulete {
          transform: rotate(-216deg);
          transition-duration: 1.5s;
        }
        .svg__titles {
          transition-duration: 1.5s;
        }

        .reutilizacion__small__title {
          transform: translateX(-88px)translateY(148px);
         
        }
    
        .digitalizacion__small__title {
          transform: translateX(-160px)translateY(285px);
        }

        .reduccion__small__title { 
          transform: translateX(-205px)translateY(50px);
        }

        .analisis__small__title {
          transform: translateX(-325px)translateY(150px); 
        }

        .intervencion__small__title {
          transform: translateX(-280px)translateY(285px);   
        }
     

        @media only screen and (max-width:767px){
          .stick {
            top: 60%;      
          }

          .reutilizacion__small__title {
            transform: translateX(-65px)translateY(100px);
          }
          .digitalizacion__small__title {
            transform: translateX(-110px)translateY(205px);
          }
          .reduccion__small__title {
            transform: translateX(-150px)translateY(40px);
          }
          .analisis__small__title {
            transform: translateX(-235px)translateY(100px);
          }
          .intervencion__small__title {
            transform: translateX(-200px)translateY(205px);
          }
        }

        /* Media Query for Tablet */
        @media only screen and (min-width: 768px) and (max-width:1023px) {
          .intervencion__small__title {
            transform: translateX(-310px)translateY(325px);
            }
          .analisis__small__title {
            transform: translateX(-365px)translateY(165px);
            }
          .digitalizacion__small__title {
              transform: translateX(-170px)translateY(325px);
            }
          .reduccion__small__title {
              transform: translateX(-230px)translateY(60px);
            }
          .reutilizacion__small__title {
              transform: translateX(-95px)translateY(165px);
            }

        }

        /* CSS for Desktop with large screen */
        @media only screen and (min-width:1301px) {
          .reutilizacion__small__title {
            transform: translateX(-95px)translateY(165px);
          }
          .intervencion__small__title {
            transform: translateX(-315px)translateY(325px);
          }
          .analisis__small__title {
            transform: translateX(-370px)translateY(165px);
          }
          .reduccion__small__title {
            transform: translateX(-230px)translateY(60px);
          }
          .digitalizacion__small__title {
            transform: translateX(-170px)translateY(325px);
          }
        }


        `}
        </style>
        <div className='container__othersOnline'>
          <figure className='green_figure'></figure>
          <p className='othersOnline__text'>REDUCCIÓN de desperdicios, a través de un proceso consciente tomando la decisión de producir sólo aquello que satisface las necesidades del consumidor.</p>
        </div>
        <p className='servicioNoDisponible__text'>Estamos trabajando en el desarrollo de este servicio.</p>

      </>
    );
  }

  const handleClickAnalisis = () => {
    setIsDivEnabled(false);
    setText(
      <>
        <style>
          {`
        .svg__firulete {
          transform: rotate(-144deg);
          transition-duration: 1.5s;
        }
        .svg__titles {
          transition-duration: 1.5s;
        }

        .reutilizacion__small__title {
          transform: translateX(-155px)translateY(285px);
         
        }
    
        .digitalizacion__small__title {
          transform: translateX(-280px)translateY(285px);
        }

        .reduccion__small__title { 
          transform: translateX(-80px)translateY(155px);
        }

        .analisis__small__title {
          transform: translateX(-200px)translateY(50px); 
        }

        .intervencion__small__title {
          transform: translateX(-343px)translateY(155px);  
        }
   

        @media only screen and (max-width:767px){
          .stick {
            top: 61%;      
          }

          .reutilizacion__small__title {
            transform: translateX(-110px)translateY(205px);
          }
          .digitalizacion__small__title {
            transform: translateX(-200px)translateY(205px);
          }
          .reduccion__small__title {
            transform: translateX(-60px)translateY(100px);
          }
          .analisis__small__title {
            transform: translateX(-145px)translateY(40px);
          }
          .intervencion__small__title {
            transform: translateX(-243px)translateY(100px);
          }
        }

        /* Media Query for Tablet */
        @media only screen and (min-width: 768px) and (max-width:1023px) {
          .intervencion__small__title {
            transform: translateX(-90px)translateY(165px);
            }
          .analisis__small__title {
            transform: translateX(-225px)translateY(56px);
            }
          .digitalizacion__small__title {
            transform: translateX(-160px)translateY(320px);
            }
          .reduccion__small__title {
              transform: translateX(-90px)translateY(165px);
            }
          .reutilizacion__small__title {
            transform: translateX(-90px)translateY(165px);
            }

        }

        /* CSS for Desktop with large screen */
        @media only screen and (min-width:1301px) {
          .reutilizacion__small__title {
            transform: translateX(-170px)translateY(325px);
          }
          .intervencion__small__title {
            transform: translateX(-385px)translateY(165px);
          }
          .analisis__small__title {
            transform: translateX(-230px)translateY(60px);
          }
          .reduccion__small__title {
            transform: translateX(-90px)translateY(165px);
          }
          .digitalizacion__small__title {
            transform: translateX(-310px)translateY(325px);
          }
        }

        `}
        </style>
        <div className='container__othersOnline'>
          <figure className='green_figure'></figure>
          <p className='othersOnline__text'>ANÁLISIS mediante inteligencia artificial con el objetivo de optimizar las decisiones de producción de la marca, en base a la información obtenida de la interacción entre la misma y el consumidor.</p>
        </div>
        <p className='servicioNoDisponible__text'>Estamos trabajando en el desarrollo de este servicio.</p>
      </>
    );
  }

  const handleClickDigitalizacion = () => {
    setIsDivEnabled(false);
    setText(
      <>
        <style>
          {`
        .svg__firulete {
          transform: rotate(-360deg);
          transition-duration: 1.5s;
        }
        .svg__titles {
          transition-duration: 1.5s;
        }

        @media only screen and (max-width:767px){
          .stick {
            top: 60%;      
          }
        }
        `}
        </style>
        <div className='container__othersOnline'>
          <figure className='green_figure'></figure>
          <p className='othersOnline__text'>DIGITALIZACIÓN del proceso productivo, comenzando por la prenda y el etiquetado, para obtener el pasaje del mundo físico al virtual, dando trazabilidad al producto.</p>
        </div>
        <p className='servicioNoDisponible__text'>Estamos trabajando en el desarrollo de este servicio.</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <section style={isDivEnabled ? { height: "auto" } : { height: "auto" }} className='container__servicios'>
        <div className='container__title'>
          <h1 className='servicios__title'>SERVICIOS</h1>
        </div>
        <div className='container__servicio'>
          <div ref={inputRef} className='container__firulete'>

            <motion.svg
              className="svg__firulete"
              onClick={() => setIsActive(!isActive)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 571 571"
            >
              <mask id="path-1-inside-1_41_3076" fill="#fff">
                <path d="M285.5 571A285.498 285.498 0 0113.973 373.724l143.909-46.759a134.186 134.186 0 00127.618 92.72V571z"></path>
              </mask>
              <path className='reduccion'
                strokeWidth="10"
                d="M285.5 571A285.498 285.498 0 0113.973 373.724l143.909-46.759a134.186 134.186 0 00127.618 92.72V571z"
                mask="url(#path-1-inside-1_41_3076)"
                onClick={handleClickReduccion}
              >
              </path>
              <mask id="path-2-inside-2_41_3076" fill="#fff">
                <path d="M557.027 373.724A285.502 285.502 0 01285.5 571V419.685a134.186 134.186 0 00127.618-92.72l143.909 46.759z"></path>
              </mask>
              <path className='analisis'
                strokeWidth="10"
                d="M557.027 373.724A285.502 285.502 0 01285.5 571V419.685a134.186 134.186 0 00127.618-92.72l143.909 46.759z"
                mask="url(#path-2-inside-2_41_3076)"
                onClick={handleClickAnalisis}
              ></path>
              <mask id="path-3-inside-3_41_3076" fill="#fff">
                <path d="M453.313 54.526a285.505 285.505 0 01103.714 319.198l-143.909-46.759a134.186 134.186 0 00-48.746-150.023l88.941-122.416z"
                ></path>
              </mask>
              <motion.path className='intervencion'
                strokeWidth="10"
                d="M453.313 54.526a285.505 285.505 0 01103.714 319.198l-143.909-46.759a134.186 134.186 0 00-48.746-150.023l88.941-122.416z"
                mask="url(#path-3-inside-3_41_3076)"
                onClick={handleClickIntervencion}
              ></motion.path>
              <mask id="path-4-inside-4_41_3076" fill="#fff">
                <path d="M117.687 54.526a285.5 285.5 0 01335.626 0l-88.941 122.416a134.186 134.186 0 00-157.744 0L117.687 54.526z"></path>
              </mask>
              <path className='digitalizacion'
                strokeWidth="10"
                d="M117.687 54.526a285.5 285.5 0 01335.626 0l-88.941 122.416a134.186 134.186 0 00-157.744 0L117.687 54.526z"
                mask="url(#path-4-inside-4_41_3076)"
                onClick={handleClickDigitalizacion}
              ></path>
              <mask id="path-5-inside-5_41_3076" fill="#fff">
                <path d="M13.973 373.724A285.498 285.498 0 01117.687 54.526l88.941 122.416a134.186 134.186 0 00-48.746 150.023L13.973 373.724z"></path>
              </mask>
              <path className='reutilizacion'
                strokeWidth="10"
                d="M13.973 373.724A285.498 285.498 0 01117.687 54.526l88.941 122.416a134.186 134.186 0 00-48.746 150.023L13.973 373.724z"
                mask="url(#path-5-inside-5_41_3076)"
                onClick={handleClickReutilizacion}
              ></path>
            </motion.svg>
            <small onClick={handleClickReutilizacion} className='reutilizacion__small__title svg__titles'>REUTILIZACIÓN </small>
            <small onClick={handleClickIntervencion} className='intervencion__small__title svg__titles'>INTERVENCIÓN </small>
            <small onClick={handleClickAnalisis} className='analisis__small__title svg__titles'>ANÁLISIS </small>
            <small onClick={handleClickDigitalizacion} className='digitalizacion__small__title svg__titles'>DIGITALIZACIÓN </small>
            <small onClick={handleClickReduccion} className='reduccion__small__title svg__titles'>REDUCCIÓN </small>
            <img className='stick' src={stick} alt="" />
          </div>
          <div className='container__text'>
            {text}
            <p className='text__click'>Hacé clic sobre el servicio del que te interese ver más información</p>
            <button style={isDivEnabled ? { display: "block" } : { display: "none" }} onClick={executeScroll} className='button__servicio'><small>Ver más</small></button>
          </div>
        </div>
        <div style={isDivEnabled ? { display: "flex", position: "relative" } : { display: "none" }} className='container__plugin'>
          <span ref={myRef} className='span__scrollHere'></span>
          <div className='container__plugin__text'>
            <p>La intervención es a través de un plugin que posibilita la combinación de prendas para mejorar la experiencia digital. El usuario podrá probarse el producto de manera virtual optimizando la decisión de compra. La herramienta facilita el armado de looks completos y muestra la versatilidad de cada artículo.</p>
          </div>
          <div className='container__plugin__video'>
            <iframe src="https://www.youtube.com/embed/ZwpPIKgUdYM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className='container__plugin__contacto'>
            <p>Si te interesa conocer más acerca de nuestro servicios, por favor contactanos por alguno de los siguientes medios:</p>
            <div className='container__plugin__contacto__icons'>
              <FaWhatsapp className='whatsAppIcon' />
              <AiOutlineMail className='mailIcon' />
            </div>
          </div>
        </div>
        <Navbar />
      </section>
      <Footer />
    </>
  )
}

export default Servicios