import React from "react";
import "./Footer.css";
import fb from "../../assets/images/icons/fb.png";
import instagram from "../../assets/images/icons/iconig.png"
import linkedin from "../../assets/images/icons/iconlinkedin.png"
import tweet from "../../assets/images/icons/tweet.png"


function Footer() {
    return (
        <footer className="footer">
            <p className="footer_text">
                ©2022 - DigitalBooking
            </p>
            <ul className="footer_icons">
                <li><a 
                    className="a_footer_icon"
                    href="https://www.instagram.com/"
                    target='_blank'
                    rel="noreferrer">
                    <img src={instagram} alt="facebook-logo" className="Nab-footer fb_logo" />
                </a></li>
                <li><a
                className="a_footer_icon"
                    href="https://www.twitter.com/"
                    target='_blank'
                    rel="noreferrer">
                    <img src={tweet} alt="facebook-logo" className="Nab-footer fb_logo" />
                </a></li>
                
                <li><a
                className="a_footer_icon"
                    href="https://www.linkedin.com/"
                    target='_blank'
                    rel="noreferrer">
                    <img src={linkedin} alt="facebook-logo" className="Nab-footer fb_logo" />
                </a></li>
                
                <li><a
                className="a_footer_icon"
                    href="https://www.facebook.com/"
                    target='_blank'
                    rel="noreferrer">
                    <img src={fb} alt="facebook-logo" className="Nab-footer fb_logo" />
                </a></li>            
            </ul>

        </footer>
    );
}

export default Footer;