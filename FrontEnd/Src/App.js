import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Brands from './brands';
import ProductDetails from './products/ProductDetails';
import AddCart from './products/AddCart';

function App () {

  return (
    <Routes>
      <Route exact path="/brands" element={<Brands/>} />
      <Route path="/brand/:ID" element={<ProductDetails />} />
      <Route path="/addcart" element={<AddCart/>} />
    </Routes>
  );
}

export default App;
