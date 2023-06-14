
import React, { useState, useRef } from 'react'
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
          display:block;
        } 
          .container__plugin {
            display: flex;
          }
        .text__click {
          display:none;
        }
        /* rotate stick 90 degrees */
        .stick {
          transform: rotate(90deg);
          transition-duration: 1.5s;
        }
        .intervencion {
          opacity: 1
        }
        .intervencion__small__title {
          color: #2c2b47;
        }

        

        @media only screen and (max-width:767px){
          .stick {
            
            animation: move-and-rotate 1.5s;
            top:calc(62vh);
          }

         

          @keyframes move-and-rotate {
            0% {
              top:calc(62vh);
              transform: rotate(0deg);
            }
            100% {
              top:calc(62vh);
              transform: rotate(90deg);
            }
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
            /* rotate stick 90 degrees */
            .stick {
              transform: rotate(-90deg);
              transition-duration: 1.5s;
            }
            .reutilizacion {
              opacity: 1
            }
            .reutilizacion__small__title {
              color: #2c2b47;
            }

            @media only screen and (max-width:767px){
              .stick {
                top:calc(64.5vh);
                animation: move-and-rotate 1.5s;
              }
                     
  
           
  
            @keyframes move-and-rotate {
              0% {
                top:calc(64.5vh);
                transform: rotate(0deg);
              }
              100% {
                top:calc(64.5vh);
                transform: rotate(-90deg);
              }
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
          /* rotate stick -145 degrees */
          .stick {
            transform: rotate(-145deg);
            transition-duration: 1.5s;
          }
          .reduccion {
            opacity: 1
          }
          .reduccion__small__title {
            color: #2c2b47;
          }

          @media only screen and (max-width:767px){
            .stick {
              top:calc(64.5vh);
              animation: move-and-rotate 1.5s;
            }

        @keyframes move-and-rotate {
          0% {
            top:calc(64.5vh);
            transform: rotate(0deg);
          }
          100% {
            top:calc(64.5vh);
            transform: rotate(-145deg);
          }
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
       
       /* rotate stick 145 degrees */
       .stick {
         transform: rotate(145deg);
         transition-duration: 1.5s;
       }
       .analisis {
         opacity: 1
       }
       .analisis__small__title {
         color: #2c2b47;
       }

       @media only screen and (max-width:767px){
        .stick {
          top:calc(64.5vh);
          animation: move-and-rotate 1.5s;
        }

        @keyframes move-and-rotate {
          0% {
            top:calc(64.5vh);
            transform: rotate(0deg);
          }
          100% {
            top:calc(64.5h);
            transform: rotate(-145deg);
          }
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
          /* rotate stick 360 degrees */
          .stick {
            transform: rotate(360deg);
            transition-duration: 1.5s;
          }
          .digitalizacion {
            opacity: 1
          }
          .digitalizacion__small__title {
            color: #2c2b47;
          }

          @media only screen and (max-width:767px){
            .stick {
              top:calc(64.5vh);
              animation: move-and-rotate 1.5s;
            }

            @keyframes move-and-rotate {
              0% {
                top:calc(64.5vh);
                transform: rotate(0deg);
              }
              100% {
                top:calc(64.5vh);
                transform: rotate(360deg);
              }
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
        {/*        <path className='stick'
            fill="#F0F0F0"
            d="M286 178.333a5.332 5.332 0 005.333-5.333 5.332 5.332 0 00-5.333-5.333 5.332 5.332 0 00-5.333 5.333 5.332 5.332 0 005.333 5.333zM287 396V173h-2v223h2z"
          ></path> */}
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
            <button /* style={isDivEnabled ? { display: "block" } : { display: "none" }} */ onClick={executeScroll} className='button__servicio'><small>Ver más</small></button>
          </div>
        </div>
        <div /* style={isDivEnabled ? { display: "flex", position: "relative" } : { display: "flex" }} */ className='container__plugin'>
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