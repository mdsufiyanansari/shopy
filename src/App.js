import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
     <Route path ="/" element={<Home />}></Route>
  //   
  // </Routes>
  </>
  )
}

export default App