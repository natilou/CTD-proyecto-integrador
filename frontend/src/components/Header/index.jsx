import React, { useState } from "react";
import "./Header.css";
import logo1N from "../../assets/images/logo1N.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import menuIcon from '../../assets/svgs/menuIcon.svg';
import Menu from '../Menu'
import AvatarView from '../AvatarView'

function Header({ showLogout, showLogin, showLine }) {
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 761px)' });
    const user = JSON.parse(localStorage.getItem("user"));

    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header className="header" data-testid="header-container">
            <div className="container_logo" data-testid="header-container-logo">
                <Link to="/" className="header_logo">
                    <img src={logo1N} alt="Logo" className="_logo" data-testid="header-logo"/>
                </Link>
                <div to="/" data-testid="header-container-logo-link">
                    <i className="header_slogan" data-testid="header-icon">Sentite como en tu hogar</i>
                </div>
            </div>

            {
                isMobile ? (
                    <button className="menu_icon_sub_container" onClick={toggleShowMenu}>
                        <img src={menuIcon} alt="menu" className="menu_icon" />
                    </button>
                ) : (
                    <div className="header_buttons" data-testid="header-buttons">
                        {
                            user ? (
                                <AvatarView userName={user.username} />
                            ) : (
                                <>
                                    {
                                        showLogout && (<Link to="/register"><button className="btn_header" data-testid="header-btn-register">Crear Cuenta</button></Link>
                                        )
                                    }
                                    {
                                        showLogin && (
                                            <Link to="/login"><button className="btn_header" data-testid="header-btn-login">Iniciar Sesion</button></Link>
                                        )
                                    }
                                </>
                            )
                        }
                    </div>
                )
            }
            {
                showMenu ? (
                    <Menu close={toggleShowMenu} showLogin={showLogin} showLogout={showLogout} showLine={showLine} user={user} />
                ) : (undefined)
            }
        </header>
    );
}

export default Header;
