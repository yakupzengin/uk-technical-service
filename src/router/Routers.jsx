import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services"
import Contact from "../pages/Contact";
import Location from "../pages/Location";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/Navbar/TopNavbar/TopNavbar";
import NotFound from "../pages/NotFound"

const Routers = () => {
  return (
    <Router>
          <TopNavbar/>
          <Navbar/> 
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="hakkımızda" element={<About/>} />
              <Route path="servislerimiz" element={<Services/>} />
              <Route path="iletişim" element={<Contact/>} />
              <Route path="konum" element={<Location/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer/>
        </Router>
  )
}

export default Routers