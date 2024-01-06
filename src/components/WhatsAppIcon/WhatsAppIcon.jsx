// WhatsAppIcon.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "./whatsAppIcon.css"; 

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-container">

    <a href="https://wa.me/05538036475" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
      <FaWhatsapp size={50} />
    </a>
    
    </div>
  );
};

export default WhatsAppIcon;
