import React from 'react';
import { FcCallback } from "react-icons/fc";
import "./NavigateServices.css";
import services from "../../Data/servicesData"
const NavigateServices = () => {
  return (
    <div className="services">
      <h2 className="services-heading">Hizmetlerimiz</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <img src={service.image} className="service-image" alt="" />
            <p className="service-title"><a href="/servislerimiz">{service.title}</a></p>
            <div className="callback-row">
              <FcCallback className="callback-icon" />
              <a className="callback-link" href="tel: 0534 299 59 00 ">
                Yetkili Servis ile iletişime geç | <span className='font-bold'> 0534 299 59 00</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateServices;