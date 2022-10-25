import React from "react";
import "./Header.css";
import logo1N from "../../assets/images/logo1N.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="container_logo">
                <Link to="/" className="header_logo">
                    <img src={logo1N} alt="Logo" className="_logo" />
                </Link>
                <div to="/">
                    <i className="header_slogan">Sentite como en tu hogar</i>
                </div>
            </div>
            <div className="header_buttons">
                <Link to="/register"><button className="btn_header">Crear Cuenta</button></Link>
                <Link to="/login"><button className="btn_header">Inciar Sesion</button></Link>
            </div>
        </header>
    );
}

export default Header;