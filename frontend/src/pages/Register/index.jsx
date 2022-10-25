import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


function Register() {
    return (
      <div>
        <Header/>
          <section className="container_register">
                <h2>Crear una cuenta</h2>
                <label>Nombre</label>
                <input type="text"/>
                <label>Apellido</label>
                <input type="text"/>
                <label>Correo electrónico</label>
                <input type="email"/>
                <label>Contraseña</label>
                <input type="password"/>
                <label>Confirmar contraseña</label>
                <input type="password"/>
                <button>Crear una cuenta</button>
                <p>¿Ya tienes cuenta?</p><Link to="/login">Iniciar Sesion</Link>
          </section>
       <Footer/>
      </div>
    );
  }
  
  export default Register;