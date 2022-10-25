import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"
import { Link } from "react-router-dom";


function LogIn() {
    return (
      <div>
        <Header/>
          <section className="container-login">
              <h2 className="title-login">Iniciar Sesión</h2>
              <div className="row">
                <label className="label-login">Correo electrónico</label>
                <input type="email" className="input-login"/>
                <label className="label-login">Constraseña</label>
                <input type="password" className="input-login"/>
              </div>
              <button className="btn-login">Ingresar</button>
              <div className="alternative-login">
                <span className="span-login">¿Aún no tienes cuenta?</span><Link to="/register"><span className="link-register">Registrate</span></Link>
              </div>
             
              
          </section>
        <Footer/>
      </div>
    );
  }
  
  export default LogIn;
  