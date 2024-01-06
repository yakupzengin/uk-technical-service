// SupportIcon.js
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import "./supportIcon.css";

const SupportIcon = () => {
  return (
    <div className="support-container">
      <div className="hotline-phone-ring-wrap1">
        <div className="hotline-phone-ring">
          <div className="hotline-phone-ring-circle1"></div>
          <div className="hotline-phone-ring-circle-fill1"></div>
          <div className="hotline-phone-ring-img-circle1">
            <a href="tel:05538036475" target="_blank" className="pps-btn-img" title="Destek Hattı">
              <FaPhone className="phone-icon" />
            </a>
          </div>
        </div>
        <div className="hotline-bar">
          <span className="text-hotline">
            <span className="hotline-title">
              <a href="tel:05538036475">7/24 Çağrı Merkezi</a>
            </span>
            <span className="hotline-slogan">
              <a href="tel:05538036475">0553 803 64 75</a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SupportIcon;
