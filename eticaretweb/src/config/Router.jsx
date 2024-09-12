import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
function Router() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>

     
   
  )
}

export default Router