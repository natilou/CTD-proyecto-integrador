import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
import facebookIcon from "../../assets/svgs/facebookIcon.svg";
import instagramIcon from "../../assets/svgs/instagramIcon.svg";
import linkedinIcon from "../../assets/svgs/linkedinIcon.svg";
import twitterIcon from "../../assets/svgs/twitterIcon.svg";
import line from "../../assets/svgs/line.svg";

function Menu({ close, showLogin, showLogout, showLine }) {
    return (
        <div id="menu_container">
            <section className="close_button_container">
                <button className="close_button" onClick={() => close()}>
                    <p className="close_text">x</p>
                </button>
                <div className="title_container">
                    <p className="close_text">MENÚ</p>
                </div>
            </section>
            <section className="login_and_register_buttons_container">
                {
                    showLogout && (
                        <Link to="/register" className="button">Crear cuenta</Link>
                    )
                }
                {
                    showLine && (
                        <img src={line} alt="line" className="line" />
                    )
                }

                {
                    showLogin && (
                        <Link to="/login" className="button">Inciar sesion</Link>
                    )

                }
            </section>

            <section className="footer_icons_container">
                <ul className="icons_list">
                    <li>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                            <img src={instagramIcon} alt="facebook-logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/" target='_blank' rel="noreferrer">
                            <img src={twitterIcon} alt="facebook-logo" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer">
                            <img src={linkedinIcon} alt="facebook-logo" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                            <img src={facebookIcon} alt="facebook-logo" />
                        </a></li>
                </ul>
            </section>
        </div>

    );
}
export default Menu;