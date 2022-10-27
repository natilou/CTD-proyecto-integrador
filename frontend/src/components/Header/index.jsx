import React, { useState } from "react";
import "./Header.css";
import logo1N from "../../assets/images/logo1N.png";
import { useMediaQuery } from 'react-responsive';
import menuIcon from '../../assets/svgs/menuIcon.svg';
import Menu from '../Menu'

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });


    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }

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
        {
            isMobile ? (
                <button className="menu_icon_sub_container" onClick={toggleShowMenu}>
                    <img src={menuIcon} alt="menu" className="menu_icon" />
                </button>
            ) : (
                <div className="header_buttons">
                    <button className="btn_header">Crear Cuenta</button>
                    <button className="btn_header">Inciar Sesion</button>
                </div>
            )
        }
        {
            showMenu ? (
                <Menu close={toggleShowMenu}/>
            ) : (
                undefined
            )
        }

        </header>
    );
}

export default Header;