import React from 'react'
import Header from './component/Header/Header.jsx'
import Nav from './component/nav/Nav'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Service from './component/Servicess/Servicess'
import Portifolio from './component/Portifolio/Portifolio'
import Testmonies from './component/Testmonies/Testmonies'
import Contact from './component/contact/Contact'
import Footer from './component/Footerr/Footerr.jsx'
const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portifolio/>
    <Testmonies/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App