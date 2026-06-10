import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./pages/About";
import ContactUs from "./Pages/contact";
import Product from "./Pages/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    

    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;