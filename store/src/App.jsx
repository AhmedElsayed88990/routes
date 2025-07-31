import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

export default function App() {
  return <>
  <BrowserRouter>

  <Navbar />
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Products' element={<Products />} />
    <Route path='*' element={<h1>Not Found</h1>} />


  </Routes>
  
  


  
  <Footer />
  
  
  </BrowserRouter>
  
  
  </>
}

