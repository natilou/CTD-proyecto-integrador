import React, { useState } from "react";
import "./Header.css";
import logo1N from "../../assets/images/logo1N.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import menuIcon from '../../assets/svgs/menuIcon.svg';
import Menu from '../Menu'

function Header({showLogout,showLogin}) {
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });

    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }

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
            
        {
            isMobile ? (
                <button className="menu_icon_sub_container" onClick={toggleShowMenu}>
                    <img src={menuIcon} alt="menu" className="menu_icon" />
                </button>
            ) : (
                <div className="header_buttons">
                    {
                        showLogout &&(
                            <Link to="/register"><button className="btn_header">Crear Cuenta</button></Link>
                            
                        )
                    }

                    {
                        showLogin &&(
                             <Link to="/login"><button className="btn_header">Iniciar Sesion</button></Link>
                        )
                        
                    }
                     
                    
                </div>
            )
        }
        {
            showMenu ? (
                <Menu close={toggleShowMenu} showLogin={showLogin} showLogout={showLogout}/>
            ) : (
                undefined
            )
        }

        </header>
    );
}

export default Header;