import React from 'react';
import '../assets/css/contact.css';
import { contactInfo } from '../utils/portfolio';
import Social from './Social';
import profile from '../assets/images/image.jpeg'

function Contact() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <Fade bottom duration={800}>
        <section className="section--contact" id="contact">

            <div className="contact-title">
                <p>{contactInfo.title}</p>
            </div>
            <div className="inner">
                
                <div className="profile-img">
                    <img src={profile} alt="profile" />
                </div>
                <div className="wrapper-inner">
                    <div className="contact-subtitle">
                        <p>{contactInfo.subTitle}</p>
                    </div>
                    <div className="contact-introduce">
                        {/* <p>{contactInfo.introduce}</p> */}
                        {/* <a href="https://www.rocketpunch.com/@36465bc8">https://www.rocketpunch.com/@36465bc8</a> */}
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
                
            </div>
        </section>
        </Fade>
    );
}
export default Contact;