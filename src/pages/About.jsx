import React from 'react';
import PagesHead from '../components/PagesHead/PagesHead';
import QuotingPart from "../components/QuotingPart/QuotingPart";
import AdvertPart from "../components/AdvertPart/AdvertPart";
import "../pagesStyles/about.css"
const About = () => {
  return (
    <div className='about-container'>
      <PagesHead title={"Hakkımızda"}/>
      <QuotingPart 
            sentence={"Yaptığınız işin kalitesi, sizin karakterinizin bir göstergesidir."} 
            subSentence={"Beyaz eşya, kombi, klima servislerinde profesyonel uzman ekibimiz siz değerli müşterilerimize en iyi hizmeti vermek için çalışmaktadır."}/>
      <div className="about-content">
        <div className='image-about'>
          <img className='about-image' src="https://serviskapimda.com/wp-content/uploads/2023/09/musteritemsilcisi-2-scaled.jpg" alt="" />
        </div>

        <div className='info-about'>
          <h1 className='about-title'>Üç Kardeşler Teknik Servis</h1>
          <p className='about-text first-p'>3 Kardeşler Teknik Servis Olarak, Yıllardır Bursa’da Hizmet Vermekteyiz. Kombi Bakımı Ve Tamiri, Petek Bakımı Ve Beyaz Eşya Tamiri Konularında Uzmanlaşmış Durumdayız. Uzun Yıllardır Bu Sektörde Faaliyet Göstererek, Müşterilerimize Her Zaman Daha Kaliteli Hizmet Sunabilmek Için Kendimizi Sürekli Yeniliyoruz. Müşteri Memnuniyetini Her Zaman Ilk Sırada Tutarak, Sektörde Öne Çıkmaktayız.</p>
          <p className='about-text second-p'>Hizmet Verdiğimiz Her Müşterimizin Memnuniyetini Sağlamak, Hizmetimiz Hakkında Yorumlarını Eksiksiz Olarak Almak Ve Çözüme Kavuşturmak Bizim En Büyük Gurur Kaynağımızdır. Müşterilerimizin Memnuniyetini Sağlamak Için Her Zaman Elimizden Gelenin En Iyisini Yapmaktayız.</p>
        </div>
      </div>

      <AdvertPart/>
    </div>
  )
}

export default About;
