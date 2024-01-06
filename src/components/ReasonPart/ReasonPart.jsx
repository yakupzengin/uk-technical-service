import React, { useState, useEffect } from 'react'; 
import "./ReasonPart.css"

const NavigateServices = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 770); 

  useEffect(() => {
    window.addEventListener("resize", () => { 
      setIsMobile(window.innerWidth < 770);
    });
  }, []);

  return (
    <div className='navigate-service'>
      <div className="flex-container">
        <div className="image-service">
          <img className={`image ${isMobile ? 'mobile' : ''}`} src="https://serviskapimda.com/wp-content/uploads/2023/09/musteritemsilcisi-2-scaled.jpg" alt="" />
        </div>
        <div className="info">
          <h1 className='info-title'>Neden Üç Kardeşler Teknik Servis?</h1>
          <h3 className='description'><span style={{marginLeft:"1rem"}}>Üç</span> Kardeşler Teknik Servis'i seçmeniz için üç önemli neden var: Tecrübe, güvenilirlik ve profesyonellik. Uzun yıllardır bu sektördeyiz ve temiz, güvenilir ve profesyonel hizmet sunma konusundaki başarımızla biliniyoruz. Siz de kaliteli hizmetimizden faydalanarak sorunsuz bir kombi ve petek temizliği veya beyaz eşya tamiri deneyimi yaşayabilirsiniz.</h3>
        </div>
      </div>
    </div>
  );
}

export default NavigateServices;
