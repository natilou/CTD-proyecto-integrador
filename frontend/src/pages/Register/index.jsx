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
    else if(!validateEmailAndPassword(email) && validatePasswordConfirmation(password, confirmedPassword) && validatePasswordLength(password)){
      usersRegistered.push(
        {
          email: email,
          username: `${name}-${lastName}`,
          password: confirmedPassword
        }
      )
      Swal.fire({
        icon: 'success',
        text: 'Usuario registrado con éxito',
      })
      setTimeout(()=>{
        return navigate("/login")
      },2300)

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
  }

  return (
    <div>
      <Header showLogin={showlogin} />
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
            </div>
            <div className="row-register">
              <label className="label-register">Contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePassword}/>
            </div>
            <div className="row-register">
              <label className="label-register">Confirmar contraseña</label>
              <input className="input-register" type="password" required onChange={handleOnChangePasswordConfirmed}/>
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
