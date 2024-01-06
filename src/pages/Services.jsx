import React from 'react';
import PagesHead from '../components/PagesHead/PagesHead';
import "../pagesStyles/services.css";

import combi from "../images/combi5.jpeg";
import washingMachine from "../images/washing-machine.jpeg";
import washingMachine2 from "../images/washing-machine-2.jpeg";
import washingMachine3 from "../images/washing-machine-3.jpeg";
import refrigeratorRepair from "../images/refrigerator-repair.jpg";
import dishwasher from "../images/dishwasher.jpg";
import airConditioning from "../images/air-conditioning.jpg";

const Services = () => {
  const services = [
    {
        image: washingMachine,
        title: "Ev Aletleri Onarımı",
        content : "Ev aletleri konusunda uzman ekibimizle Beyaz Eşya Tamiri hizmeti sunuyoruz."
    },
    {
        image: refrigeratorRepair,
        title : "Soğutucu Cihaz Onarımı",
        content: "Evlerinizdeki buzdolaplarına özel tamir hizmeti ile Üç Kardeşler Teknik Servisi yanınızda."
    },
    {
        image: dishwasher,
        title: "Bulaşık Makinesi Tamiri",
        content: "Bulaşık makinesi arızalarınızı profesyonel bir şekilde çözüme kavuşturuyoruz"
        
    },
    {
        image: washingMachine2,
        title: "Çamaşır Makinesi Onarımı",
        content : "Üç Kardeşler Teknik Servis olarak, çamaşır makinelerinizdeki sorunlar artık endişe kaynağı değil."
    },
    {
        image: airConditioning,
        title: "Klima Onarımı",
        content : "Sıcak yaz günlerinde serin bir ortam sağlamak için klima onarımında sizlere destek oluyoruz."

      },
      {
        image: washingMachine3,
        title: "Küçük Ev Aleti Tamiri",
        content : "Üç Kardeşler Teknik Servisi, küçük ev aletlerinizin tamirinde uzman ekibi ile hizmetinizde."
      },
      {
        image: combi,
        title: "Kombi Onarımı",
        content : "Kış aylarında ısınma sorunlarına son vermek için Üç Kardeşler Teknik Servisi'ni arayın, kombi tamiri hizmeti alın."
      },
  ];

  return (
    <div>
      <PagesHead title={"Servislerimiz"} />
      <div className='services-container'>
        {services.map((service, index) => (
          <div key={index} className='service-card'>
            <div className="service-card-inner">
              <div className="service-card-image">
                <img src={service.image} alt="" />
              </div>
              <div className="service-card-title">
                <h1>{service.title}</h1>
              </div>
              <div className="service-card-content">
                <p>{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
