import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./component/Footer";


const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
     <Route path ="/" element={<Home />}></Route>
     <Route path ="/product/:id" element={<Product />}></Route>
  //   
  // </Routes>
  <Footer/>
  </>
  )
}

export default App