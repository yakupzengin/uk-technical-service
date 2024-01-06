import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';
import { BiTimer } from 'react-icons/bi';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { motion } from 'framer-motion'; 
import './advertPart.css';

const AdvertPart = () => {
  return (
    <motion.div className="advert-container">
      <motion.div
        className="advert-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="advert-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GiAutoRepair size={75} className="advert-icon" />
          <div className="advert-title">Profesyonel Hizmet</div>
          <div className="advert-text">
            Kombi, Petek ve Beyaz eşya arızlarınızda müşterilerimize güvenilir bir teknik servis sunmak için günden güne daha çok çalışıyoruz.
          </div>
        </motion.div>

        <motion.div
          className="advert-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BiTimer size={75} className="advert-icon" />
          <div className="advert-title">7/24 Teknik Destek</div>
          <div className="advert-text">
            Her saat teknik servis hizmetimiz vardır.
          </div>
        </motion.div>

        <motion.div
          className="advert-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RiCustomerServiceFill size={75} className="advert-icon" />
          <div className="advert-title">Telefon</div>
          <div className="advert-text">
            0534 299 59 00
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdvertPart;
