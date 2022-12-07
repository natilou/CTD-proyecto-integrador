import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePasswordLength, validateEmailAndPassword, validatePasswordConfirmation } from '../LogIn/utils'
import { usersRegistered } from "../LogIn/constants";
import Swal from 'sweetalert2';



function Register() {

  const showlogin = true; 
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("")
  let navigate = useNavigate();


  function handleOnChangeNombre(e){
    setName(e.target.value)
  }

  function handleOnChangeApellido(e){
    setLastName(e.target.value);
  }

  function handleOnChangeEmail(e){
    let email = e.target.value;
    setEmail(email)
  }

  function handleOnChangePassword(e){
    let password = e.target.value;
    setPassword(password)
  }

  function handleOnChangePasswordConfirmed(e){
    let passwordConfirmed = e.target.value;
    setConfirmedPassword(passwordConfirmed)
    
  }

  function handleSubmit(){
    if(email === "" || name === "" || lastName === "" || password === "" || confirmedPassword === ""){
      Swal.fire({
        icon: 'error',
        text: 'Todos los campos son obligatorios',
      })
    }
    else if(validateEmailAndPassword(email)){
      Swal.fire({
        icon: 'error',
        text: 'El usuario ya se encuentra registrado',
      })
    }
    else if(!validatePasswordConfirmation(password, confirmedPassword)){
      Swal.fire({
        icon: 'error',
        text: 'Las contraseñas no coinciden',
      })
    }
    else if(!validateEmail(email)){
      Swal.fire({
        icon: 'error',
        text: 'Correo electrónico inválido',
      })
    }
    else if(!validatePasswordLength(password)){
      Swal.fire({
        icon: 'error',
        text: 'La contraseña debe tener más de 6 caracteres',
      })
    }
    else {
      let payload = {
        name: name,
        lastName: lastName,
        email: email,
        password: confirmedPassword,
        role: 1,
      }
      fetch("http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/users",
      {
        method: "POST", 
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(response => {
        if(response){
          Swal.fire({
            icon: 'success',
            text: 'Usuario creado correctamente',
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(()=>{
                return navigate("/login")
                },500) 
            }}) 
        }
        
      })
    }
  }

  return (
    <div>
      <Header showLogin={showlogin} />
        <section className="container-register" data-testid="register-container">
            <h2 className="title-register" data-testid="register-title">Crear una cuenta</h2>
            <div className="row-register-with-col" data-testid="register-row-container-1">
                <div className="col-register" data-testid="register-col-container-1">
                  <div className="row-register-with-col" data-testid="register-row-container-2">
                    <label className="label-register" data-testid="register-name-label">Nombre</label>
                  </div>
                  <div className="row-register-with-col" data-testid="register-col-container-2">
                    <input className="input-register" type="text" required onChange={handleOnChangeNombre} data-testid="register-name-input"/>
                  </div>
                </div>
                <div className="col-register" data-testid="register-col-1">
                  <div className="row-register-with-col" data-testid="register-row-container-3">
                    <label className="label-register" data-testid="register-lastname-label">Apellido</label>
                  </div>
                  <div className="row-register-with-col" data-testid="register-row-container-4">
                  <input className="input-register" type="text" required onChange={handleOnChangeApellido} data-testid="register-lastname-input"/>
                  </div>
                </div>
            </div>
            <div className="row-register" data-testid="register-row-1">
              <label className="label-register" data-testid="register-email-label">Correo electrónico</label>
              <input className="input-register" type="email" required onChange={handleOnChangeEmail} data-testid="register-email-input"/>
            </div>
            <div className="row-register" data-testid="register-row-2">
              <label className="label-register" data-testid="register-password-label">Contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePassword} data-testid="register-password-input"/>
            </div>
            <div className="row-register" data-testid="register-row-3">
              <label className="label-register" data-testid="register-passconfirmation-label">Confirmar contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePasswordConfirmed} data-testid="register-passconfirmation-input"/>
            </div>
            <button className="btn-register" onClick={handleSubmit} data-testid="register-btn">Crear una cuenta</button>
            <div className="alternative-register" data-testid="register-alternative">
              <span className="span-register" data-testid="alternative-span">¿Ya tienes cuenta?</span>
              <Link to="/login" data-testid="login-link">Iniciar Sesión</Link>
            </div>
        </section>
      <Footer/>
    </div>
  );
}

export default Register;
