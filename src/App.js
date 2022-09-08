import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./components/Home";
import Services from './components/Services';
import Products from "./components/Products";
import Jungle from './components/Jungle';
import Bali from './components/Bali';
import Sailing from './components/Sailing';
import Football from './components/Football';
import Sahara from './components/Sahara';


import './assets/App.css';
 
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/jungle' element={<Jungle/>}/>
          <Route path='/bali' element={<Bali/>}/>
          <Route path='/sailing' element={<Sailing/>}/>
          <Route path='/football' element={<Football/>}/>
          <Route path='/sahara' element={<Sahara/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
