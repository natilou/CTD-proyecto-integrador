import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateEmail, validatePasswordLength, validateEmailAndPassword, getUser } from './utils'
import Swal from 'sweetalert2';


function LogIn() {

  const showLogout = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleOnChangeEmail(e){
    let email = e.target.value;
    setEmail(email)
  }

  function handleOnChangePassword(e){
    let password = e.target.value;
    setPassword(password)
  }

  function handleSubmit(){
    if(email === "" && password === ""){
      Swal.fire({
        icon: 'error',
        text: 'Todos los campos son obligatorios',
      })
    } 
    else if(!validatePasswordLength(password) && validateEmail(email)){
      Swal.fire({
        icon: 'error',
        text: 'La contraseña debe tener más de 6 caracteres',
      })
    }
    else if(!validatePasswordLength(password) && email === ""){
      Swal.fire({
        icon: 'error',
        text: ' La contraseña debe tener más de 6 caracteres y debes completar el campo del correo electronico',
      })
    }
    else if(validatePasswordLength(password) && email === ""){
      Swal.fire({
        icon: 'error',
        text: 'Debes completar el campo del correo electronico',
      })
    }
    else if(!validateEmail(email) && validatePasswordLength(password)){
      Swal.fire({
        icon: 'error',
        text: 'Correo electrónico inválido',
      })
    }
    else if(!validateEmail(email) && password === ""){
      Swal.fire({
        icon: 'error',
        text: 'El correo electrónico es inválido y debe completar el campo de la contraseña',
      })
    }
    else if(validateEmail(email) && password === ""){
      Swal.fire({
        icon: 'error',
        text: 'Debe completar el campo de la contraseña',
      })
    }
    else {
      fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/auth/?email=${email}&password=${password}`, {
        method: "POST", 
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(response => {
        if (response){
          localStorage.setItem("user", JSON.stringify({name: response.name, lastName: response.lastName, email: response.email, role: response.role})); 
          localStorage.setItem("jwt", JSON.stringify({token: response.token})); 
          navigate("/")
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Lamentablemente no ha podido iniciar sesión. Por favor, intente más tarde',
          })
        }
        
      })
      .catch(error => console.log(error))
    }
  }

  return (
    <div>
      <Header showLogout={showLogout} />
        <section className="container-login" data-testid="login-container">
            <h2 className="title-login" data-testid="login-title">Iniciar Sesión</h2>
            <div className="row" data-testid="login-row">
              <label className="label-login" data-testid="login-email-label">Correo electrónico</label>
              <input type="email" className="input-login" onChange={handleOnChangeEmail} data-testid="login-email-input"/>
              <label className="label-login" data-testid="login-password-label">Contraseña</label>
              <input type="password" className="input-login" onChange={handleOnChangePassword} data-testid="login-password-input"/>
            </div>
            <button className="btn-login" onClick={handleSubmit} data-testid="login-btn">Ingresar</button>
            <div className="alternative-login" data-testid="login-alternative">
              <span className="span-login" data-testid="login-span1-alternative">¿Aún no tienes cuenta?</span><Link to="/register" data-testid="register-link"><span className="link-register" data-testid="login-span2-alternative">Registrate</span></Link>
            </div>
        </section>
      <Footer/>
    </div>
  );
}

export default LogIn;