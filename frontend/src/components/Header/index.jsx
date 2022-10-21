import React from "react";
import "./Header.css";
import logo1N from "../../assets/images/logo1N.png";

function Header() {
    return (
        <header className="header">
            <div className="container_logo">
                <div className="header_logo" to="/">
                    <img src={logo1N} alt="Logo" className="_logo" />
                </div>
                <div to="/">
                    <i className="header_slogan">Sentite como en tu hogar</i>
                </div>
            </div>
            <div className="header_buttons">
                <button className="btn_header">Crear Cuenta</button>
                <button className="btn_header">Inciar Sesion</button>

            </div>
        </header>
    );
}

export default Header;