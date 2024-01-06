import React from 'react';
import {MdWifiCalling3} from "react-icons/md";
import "./supportLine.css";

const SupportLine = () => {
  return (
    <div className="support-line">
      <div className="support-line-container">
        <h2 className="support-line-heading">Teknik servis İçin daha İyi çözümlerle bize hemen ulaşın.</h2>
        <div className="support-line-row">
          <MdWifiCalling3 className="support-line-icon" />
          <a href="https://wa.me/+9005342995900" className="support-line-link">0534 299 59 00</a>
        </div>
      </div>
    </div>
  );
}

export default SupportLine;
