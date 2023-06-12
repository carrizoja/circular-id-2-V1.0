import React from 'react'
import './manifiesto.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
function About() {
  return (
    <>
      <Header/>
      <section className='container__manifiesto'>
        <div className='container__title'>
          <h1 className='manifiesto__title'>MANIFESTO</h1>
        </div>
        <div className='container__manifiesto__text'>
          <p className='manifiesto__text'>
          Circular ID ofrece un enfoque multidisciplinario centrado en la sostenibilidad con el objetivo de transformar la industria de la moda desde una economía lineal hacia una identidad circular.
          </p>
        </div>
        <Navbar/>
      </section>
      <Footer/>
    </>

  )
}

export default About