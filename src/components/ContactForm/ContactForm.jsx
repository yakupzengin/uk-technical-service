import React, { useEffect, useRef, useState } from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import "./ContactForm.css"
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const navigate = useNavigate();

    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 200000);
            return () => clearTimeout(timer);
        }

    }, [successMessage, navigate])

    const validateForm = () => {
        const name = form.current['from_name'].value;
        const phone = form.current['contact_number'].value;
        const message = form.current["message"].value;
        if (!name.trim() || parseFloat(name)) {
            setErrorMessage("Lütfen geçerli bir ad-soyad giriniz.")
            return false;
        }
        if (!phone.trim()) {
            setErrorMessage("Lütfen geçerli bir telefon numarası giriniz.")
            return false;
        }
        if (isNaN(phone)) {
            setErrorMessage("Telefon numaranızda hatalı giriş var.")
            return false;
        }
        if (!message.trim()) {
            setErrorMessage("Lütfen mesajınızı giriniz.")
            return false;
        }

        setErrorMessage('');
        return true;
    };
    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs.sendForm('service_2q4daym', 'template_1kk14qd', form.current, 'TbRpDcBt3m9tlDXoD')
            .then((result) => {
                setSuccessMessage('Mesajınız başarıyla gönderildi.');
                setErrorMessage('');
                form.current.reset(); // Formu temizle
                // navigate('/');
            })
            .catch((error) => {
                setErrorMessage('Bir hata oluştu, lütfen daha sonra tekrar deneyin.');
                console.log(error)
                setSuccessMessage('');
            })
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <div className="left-side">
                    <div className="sidebar">
                        <div className="contact-info">
                            <div className='contact-title'>
                                <div className='contact-icon'>
                                    <MdContacts />
                                </div>
                                <h4 className="info-title">İletişim Bilgileri</h4>
                            </div>

                            <ul className="contacts-list">
                                <li className='contacts-list-item'>
                                    <div className="contact-list-item__icon">
                                        <TfiLocationPin />
                                    </div>
                                    <div className="contact-list-item__desc">
                                        <div className="contact-list-item__label1">Konum</div>
                                        <div className="contacts-list-item__content">Bursa</div>
                                    </div>
                                </li>
                                <li className='contacts-list-item'>
                                    <div className="contact-list-item__icon">
                                        <IoLogoWhatsapp />

                                    </div>
                                    <div className="contact-list-item__desc">

                                        <div className="contact-list-item__label1">Whattsapp'dan ulaşım</div>
                                        <div className="contacts-list-item__content">Tıklayınız :
                                            <a style={{ fontWeight: "bolder", color: "darkorange" }} href="https://wa.me/+9005342995900"> 0534 299 59 00</a>
                                        </div>
                                    </div>
                                </li>
                                <li className='contacts-list-item'>
                                    <div className="contact-list-item__icon">
                                        <IoIosTimer />

                                    </div>
                                    <div className="contact-list-item__desc">
                                        <div className="contact-list-item__label1">7/24 Çalışma Saati</div>
                                        <div className="contacts-list-item__content">Bizlerle 7/24 iletişime geçebilir,destek alabilirsiniz.</div>
                                    </div>
                                </li>
                                <li className='contacts-list-item'>
                                    <div className="contact-list-item__icon">
                                        <IoMailOutline />
                                    </div>
                                    <div className="contact-list-item__desc">
                                        <div className="contact-list-item__label1">E-posta</div>
                                        <div className="contacts-list-item__content">
                                            <a style={{ fontWeight: "bolder", color: "darkorange" }} href="mailto:support@company.com">support@company.com</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="contact-list">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="section-title">
                        <div className="contact-icon">
                            <IoInformationCircleOutline />
                        </div>
                        <div className="section-title-h2">İletişim Formu</div>
                    </div>
                    <div className="section-content">


                        <form ref={form} onSubmit={sendEmail} action="" name='form-contact' id='form-contact'>
                            <div class="form-contact-container" data-uk-grid="">
                                <div class="form-name-surname">

                                    <input className='' type="text" name="from_name" id="form-ad" placeholder="Ad Soyad" />
                                </div>

                                <div class="form-number">
                                    <input class="" type="text" name="contact_number" id="form-telefon" placeholder="Telefon" />

                                </div>
                                {/* <div class="form-email">
                                    <input type="text" name="user_email" id="form-eposta" placeholder="E-posta" />

                                </div> */}
                                <div class="form-message">
                                    <textarea cols="55" rows="3" name="message" id="form-mesaj" placeholder="Mesajınız"></textarea>
                                </div>
                                <div class="form-columns">
                                    <p class="form-info">
                                        Kişisel Verilerin Korunması kanunu kapmasında vermiş olduğunuz bilgiler sadece sizinle iletişim kurmak amacıyla kullanılacak, hiç bir şekilde 3. Şahıs ve diğer pazarlama faaliyetleri gösteren firma ve kuruluşlarla paylaşılmayacaktır
                                    </p>
                                </div>
                                <div class="form-button">
                                    <button class="submit-button" type="submit">Gönder</button></div>
                            </div>
                        </form>
                        {errorMessage && (
                            <div className="error-message">
                                {errorMessage}
                                <div className='error-message-icon'>
                                    <CiWarning />
                                </div>
                            </div>
                        )}
                        {successMessage && (
                            <div className="success-message">
                                <div className='success-message-icon'>
                                    <MdOutlineDone />
                                </div>
                                {successMessage}
                                <button className='goHome-btn' onClick={() => navigate("/")}>Anasayfa</button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
