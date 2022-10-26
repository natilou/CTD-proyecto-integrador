import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePasswordLength, validatePasswordRegistrated, validateEmailRegistrated } from '../LogIn/utils'
import { usersRegistrated } from "../LogIn/constants";
import Swal from 'sweetalert2';



function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [displayEmailError, setDisplayEmailError] = useState("none");
  const [displayPasswordError, setDisplayPasswordError] = useState("none");
  const [passwordConfirmedError, setPasswordConfirmedError] = useState("none");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  let navigate = useNavigate();


  function handleOnChangeNombre(e){
    setNombre(e.target.value);
  }

  function handleOnChangeApellido(e){
    setApellido(e.target.value);
  }

  function handleOnChangeEmail(e){
    let email = e.target.value;
    validateEmail(email) ? setEmail(email) : setDisplayEmailError("block");
  }

  function handleOnChangePassword(e){
    let password = e.target.value;
    if(validatePasswordLength(password)){
      setPassword(password)
    } else {
      setDisplayPasswordError("block")
    }
  }

  function handleOnChangePasswordConfirmed(e){
    let passwordConfirmed = e.target.value;
    password !== passwordConfirmed ? setPasswordConfirmedError("block") : setConfirmedPassword(password)
  }

  function handleSubmit(){
    if(email === "" || nombre === "" || apellido === "" || confirmedPassword === ""){
      Swal.fire({
        icon: 'error',
        text: 'Todos los campos son obligatorios',
      })
    }
    else if(!validateEmailRegistrated(email)){
      usersRegistrated.push(
        {
          email: email,
          username: `${nombre} ${apellido}`,
          password: confirmedPassword
        }
      )
      return navigate("/")
    } else {
      Swal.fire({
        icon: 'error',
        text: 'El usuario ya se encuentra registrado',
      })
    }
  }
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
                    <input className="input-register" type="text" required onChange={handleOnChangeNombre}/>
                  </div>
                </div>
                <div className="col-register">
                  <div className="row-register-with-col">
                    <label className="label-register">Apellido</label>
                  </div>
                  <div className="row-register-with-col">
                  <input className="input-register" type="text" required onChange={handleOnChangeApellido}/>
                  </div>
                </div>
            </div>
            <div className="row-register">
              <label className="label-register">Correo electrónico</label>
              <input className="input-register" type="email" required onChange={handleOnChangeEmail}/>
              <p style={{display:displayEmailError}}>Correo electrónico inválido</p>
            </div>
            <div className="row-register">
              <label className="label-register">Contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePassword}/>
              <p style={{display:displayPasswordError}}>La contraseña debe tener más de 6 caracteres</p>
            </div>
            <div className="row-register">
              <label className="label-register">Confirmar contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePasswordConfirmed}/>
              <p style={{display:passwordConfirmedError}}>Las contraseñas no coinciden</p>
            </div>
            <button className="btn-register" onClick={handleSubmit}>Crear una cuenta</button>
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