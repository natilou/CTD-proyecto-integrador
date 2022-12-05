import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import facebookIcon from "../../assets/svgs/facebookIcon.svg";
import instagramIcon from "../../assets/svgs/instagramIcon.svg";
import linkedinIcon from "../../assets/svgs/linkedinIcon.svg";
import twitterIcon from "../../assets/svgs/twitterIcon.svg";
import line from "../../assets/svgs/line.svg";
import AvatarView from '../AvatarView';
import Swal from 'sweetalert2';

function Menu({ close, showLogin, showLogout, showLine, user }) {


    function closeSession(){
        Swal.fire({
          title: '¿Deseas cerrar sesión?',
          showDenyButton: true,
          confirmButtonText: 'Sí',
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            setTimeout(()=>{
              localStorage.removeItem("user")
            window.location.reload(true)
            }, 900)
            
          } else if (result.isDenied) {
            Swal.fire('Sigue navegando!', '', 'success')
          }
        })
      }

    return (
        <div id="menu_container" data-testid="menu-container">
            <section className="close_button_container" data-testid="menu-section">
                <button className="close_button" onClick={() => close()} data-testid="menu-btn">
                    <p className="close_text" data-testid="menu-btn-content">x</p>
                </button>
                <div className="title_container" data-testid="menu-title">
                    {
                        user ? (
                        <AvatarView userName={user.name}/>
                        ) : (
                            <p className="close_text">MENÚ</p>
                        )
                    }
                </div>
            </section>
            <section className="login_and_register_buttons_container" data-testid="menu-login-register">
                {
                    user ? (
                    <>
                        <Link onClick={() => close()} to="/admin" className="button"  style={{ marginRight: 30 }}>Administración</Link>
                        <img src={line} alt="line" className="line" />
                    </>
                    ) : (
                        <>
                            {
                                showLogout && (
                                    <Link onClick={() => close()} to="/register" className="button">Crear cuenta</Link>
                                )
                            }
                            {
                                showLine && (
                                    <img src={line} alt="line" className="line" />
                                )
                            }

                            {
                                showLogin && (
                                    <Link onClick={() => close()} to="/login" className="button">Inciar sesion</Link>
                                )

                            }
                        </>
                        )
                    }
                
            </section>
            {
                user ? (
                    <section className='close-session'>
                        <p className='p-close-session'>¿Deseas<span className='span-close-session' onClick={closeSession}> cerrar sesión</span><span>?</span></p>
                        <hr/>  
                    </section>
                ) : (
                    <></>
                )
            }
            

            <section className="footer_icons_container" data-testid="menu-footer">
                <ul className="icons_list" data-testid="menu-icon-list">
                    <li>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" data-testid="menu-instagram-link">
                            <img src={instagramIcon} alt="facebook-logo" data-testid="menu-instagram-logo"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/" target='_blank' rel="noreferrer" data-testid="menu-twitter-link">
                            <img src={twitterIcon} alt="facebook-logo" data-testid="menu-twitter-logo"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer" data-testid="menu-linkedin-link">
                            <img src={linkedinIcon} alt="facebook-logo" data-testid="menu-linkedin-logo"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/" target='_blank' rel="noreferrer" data-testid="menu-facebook-link">
                            <img src={facebookIcon} alt="facebook-logo" data-testid="menu-facebook-logo"/>
                        </a></li>
                </ul>
            </section>
        </div>

    );
}
export default Menu;
