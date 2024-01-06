import React from 'react'
import "../pagesStyles/notFound.css"
import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";

const NotFound = () => {
    const navigate = useNavigate();
    return (
      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Sayfa Bulunamadı!</h2>
          <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
          <div className="not-found-b" onClick={() => navigate("/")} >Anasayfaya geri dön.
            <GrLinkNext className='not-found-icon' />
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFound;