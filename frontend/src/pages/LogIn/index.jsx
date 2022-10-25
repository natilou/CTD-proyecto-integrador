import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"
import { Link } from "react-router-dom";


function LogIn() {
    return (
      <div>
        <Header/>
          <section className="container_login">
              <h2>Iniciar Sesión</h2>
              <label>Correo electrónico</label>
              <input type="email"/>
              <label>Constraseña</label>
              <input type="password"/>
              <button>Ingresar</button>
              <p>¿Aún no tienes cuenta?</p><Link to="/register">Crear Cuenta</Link>
          </section>
        <Footer/>
      </div>
    );
  }
  
  export default LogIn;
  