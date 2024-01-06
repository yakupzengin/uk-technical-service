import MyLogo from "../../images/last-updatedNewLogo.jpg"
import { Footer } from 'flowbite-react';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from "react-icons/md"
import "./footer.css"

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Footer.Brand  style={{listStyle:"none"}}
              className="logo"
              alt="Üç Kardeşler Teknik Servis Logo"
              href="./"
              name={<span className="brand-name">Üç Kardeşler Teknik Servis</span>}
              src={MyLogo}
            />
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <Footer.Title style={{fontSize:"20px" , padding:"5px 0"}}  title="Hakkımızda" />
              <Footer.LinkGroup style={{fontSize:"15px",display:"flex",flexDirection:"column"}} col >
                <Footer.Link style={{fontSize:"15px",display:"flex"}} href="/hakkımızda">
                  Biz Kimiz ?
                </Footer.Link>
                <Footer.Link  href="#işimiz">
                  Servisler
                </Footer.Link>
                <Footer.Link  href="#işimiz">
                  İ<l></l>etişim
                </Footer.Link>
                <Footer.Link  href="#işimiz">
                  Konum 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="footer-section">
              <Footer.Title style={{fontSize:"20px", padding:"5px 0"}} title="Takip Edin" />
              <Footer.LinkGroup style={{fontSize:"15px",display:"flex",flexDirection:"column"}} col>
                <Footer.Link   href="https://www.facebook.com/people/%C3%9C%C3%A7karde%C5%9Fler-teknik-servis/100094923730332/?mibextid=LQQJ4d">
                  Facebook
                </Footer.Link>
                <Footer.Link    href="https://wa.me/+9005342995900">
                  Whatsapp
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="footer-section">
                 <Footer.Title style={{fontSize:"20px", padding:"5px 0"}} title="Hizmetlerimiz" />
              <Footer.LinkGroup style={{fontSize:"15px",display:"flex",flexDirection:"column"}} col>
                <Footer.Link   href="./servislerimiz">
                  Kombi Bakım & Tamir
                </Footer.Link>
                <Footer.Link  href="./servislerimiz">
                  Petek Bakımı
                </Footer.Link>
                <Footer.Link   href="./servislerimiz">
                  Beyaz Eşya Tamir
                </Footer.Link>
              </Footer.LinkGroup>
             
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="footer-bottom">
          <Footer.Copyright
          className="footer-bottom-inside"
            by=" Üç Kardeşler Teknik Servis™"
            href="./"
            year={2022}
          />
          <div className="footer-icons">
            <Footer.Icon
              href="https://www.facebook.com/people/%C3%9C%C3%A7karde%C5%9Fler-teknik-servis/100094923730332/?mibextid=LQQJ4d"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://wa.me/+9005342995900"
              icon={BsWhatsapp}
            />
            <Footer.Icon
              href="mailto:support@company.com"
              icon={MdOutlineEmail}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}
