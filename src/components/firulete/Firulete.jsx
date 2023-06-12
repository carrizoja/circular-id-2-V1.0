import React  from 'react'
import {motion} from "framer-motion"
import './firulete.css'
function Firulete() {
 
  return (
    <>
      <div className='container__firulete'>
        <motion.svg
   
          className='svg__firulete'
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
          ></path><text  y="480" x="130"  className='reduccion__title svg__titles' >REDUCCIÓN</text>
          <mask id="path-2-inside-2_41_3076" fill="#fff">
            <path  d="M557.027 373.724A285.502 285.502 0 01285.5 571V419.685a134.186 134.186 0 00127.618-92.72l143.909 46.759z"></path>
          </mask>
          <path className='analisis'
            strokeWidth="10"
            d="M557.027 373.724A285.502 285.502 0 01285.5 571V419.685a134.186 134.186 0 00127.618-92.72l143.909 46.759z"
            mask="url(#path-2-inside-2_41_3076)"
          ></path><text  y="480" x="355"  className='analisis__title svg__titles' >ANÁLISIS</text>
          <mask id="path-3-inside-3_41_3076" fill="#fff">
            <path d="M453.313 54.526a285.505 285.505 0 01103.714 319.198l-143.909-46.759a134.186 134.186 0 00-48.746-150.023l88.941-122.416z"></path>
          </mask>
          <path className='intervencion'
            strokeWidth="10"
            d="M453.313 54.526a285.505 285.505 0 01103.714 319.198l-143.909-46.759a134.186 134.186 0 00-48.746-150.023l88.941-122.416z"
            mask="url(#path-3-inside-3_41_3076)"
            
          ></path><text y="250" x="427"  className='intervencion__title svg__titles' >INTERVENCIÓN</text>
          <mask id="path-4-inside-4_41_3076" fill="#fff">
            <path d="M117.687 54.526a285.5 285.5 0 01335.626 0l-88.941 122.416a134.186 134.186 0 00-157.744 0L117.687 54.526z"></path>
          </mask>
          <path className='digitalizacion'
            strokeWidth="10"
            d="M117.687 54.526a285.5 285.5 0 01335.626 0l-88.941 122.416a134.186 134.186 0 00-157.744 0L117.687 54.526z"
            mask="url(#path-4-inside-4_41_3076)"
          ></path><text  y="90" x="220"  className='digitalizacion__title svg__titles' >DIGITALIZACIÓN</text>
          <mask id="path-5-inside-5_41_3076" fill="#fff">
            <path d="M13.973 373.724A285.498 285.498 0 01117.687 54.526l88.941 122.416a134.186 134.186 0 00-48.746 150.023L13.973 373.724z"></path>
          </mask>
          <path className='reutilizacion'
            strokeWidth="10"
            d="M13.973 373.724A285.498 285.498 0 01117.687 54.526l88.941 122.416a134.186 134.186 0 00-48.746 150.023L13.973 373.724z"
            mask="url(#path-5-inside-5_41_3076)"
          ></path><text  y="250" x="17"  className='reutilizacion__title svg__titles' >REUTILIZACIÓN</text>
          <path
            fill="#F0F0F0"
            d="M286 178.333a5.332 5.332 0 005.333-5.333 5.332 5.332 0 00-5.333-5.333 5.332 5.332 0 00-5.333 5.333 5.332 5.332 0 005.333 5.333zM287 396V173h-2v223h2z"
          ></path>
        </motion.svg>
      </div>
    </>
  )
}

export default Firulete