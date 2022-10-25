import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


function Register() {
    return (
      <div>
        <Header/>
          <section className="container-register">
              <h2 className="title-register">Crear una cuenta</h2>
              <div className="row-register-with-col">
                  <div className="col-register">
                    <div className="row-register-with-col">
                      <label className="label-register">Nombre</label>
                    </div>
                    <div className="row-register-with-col">
                      <input className="input-register" type="text"/>
                    </div>
                  </div>
                  <div className="col-register">
                    <div className="row-register-with-col">
                      <label className="label-register">Apellido</label>
                    </div>
                    <div className="row-register-with-col">
                    <input className="input-register" type="text"/>
                    </div>
                  </div>
              </div>
              <div className="row-register">
                <label className="label-register">Correo electrónico</label>
                <input className="input-register"type="email"/>
              </div>
              <div className="row-register">
                <label className="label-register">Contraseña</label>
                <input className="input-register"type="password"/>
              </div>
              <div className="row-register">
                <label className="label-register">Confirmar contraseña</label>
                <input className="input-register"type="password"/>
              </div>
              <button className="btn-register">Crear una cuenta</button>
              <div className="alternative-register">
                <span className="span-register">¿Ya tienes cuenta?</span>
                <Link to="/login">Iniciar Sesión</Link>
              </div>
          </section>
       <Footer/>
      </div>
    );
  }
  
  export default Register;