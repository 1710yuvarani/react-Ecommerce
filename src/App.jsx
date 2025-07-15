import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './Component/Navbar'
import Footer from './Component/footer'


function App() {
  return (
    <BrowserRouter>
   <Navbar/>
    <Routes>
        <Route path ='/' element ={<Home/>} />
        <Route path ='/about' element ={<About/>} />
        <Route path ='/product' element ={<Product/>} />
        <Route path ='/contact' element ={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App