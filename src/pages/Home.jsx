import React from 'react'
import image from "../images/newSlider3.png"
import Counter from '../components/Home/Counter'
import SupportLine from "../components/SupportLine/SupportLine"
import CustomerComments from '../components/CustomerComment/CustomerComment'
import ReasonPart from '../components/ReasonPart/ReasonPart'
import NavigateServices from '../components/NavigateServices/NavigateServices'
import "../pagesStyles/home.css"
const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <div className="row">
          <div className="col-12">
            <img src={image} className="main-banner" alt="main banner"/> 
          </div>
        </div>
      </div>
      <Counter />
      <SupportLine/>
      <ReasonPart/>
      <CustomerComments/>  
      <NavigateServices/>
    </>
  )
}

export default Home