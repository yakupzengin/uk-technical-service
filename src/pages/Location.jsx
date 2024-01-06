import React, { useState, useEffect } from 'react';
import PagesHead from '../components/PagesHead/PagesHead';
import '../pagesStyles/location.css';

const Location = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="location-page">
      <PagesHead title={"Konum"} />
      <div className="location-info">
        <h2>Üç Kardeşler Teknik Servis</h2>
        <p>Bursada Hizmet Vermekteyiz.</p>
        <p>0534 299 59 00</p>
        <p>0553 803 64 75</p>
      </div>
      <div className="map">
        {loading ? (
          <p className='loading-message'>Haritamızı sizin için hazırlıyoruz...</p>
        ) : (
          <iframe
          title='location' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195105.29165628992!2d28.664641654725788!3d40.175235610238076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca05620c05be45%3A0xb41d1ba82a41bf94!2zTmlsw7xmZXIvQnVyc2E!5e0!3m2!1sen!2str!4v1702216519009!5m2!1sen!2str" 
          width="800" 
          height="600" 
           allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            
          </iframe>
        )}
      </div>
    </div>
  );
};

export default Location;
