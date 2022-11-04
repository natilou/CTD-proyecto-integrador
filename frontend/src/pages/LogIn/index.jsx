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
    else if(validateEmailAndPassword(email, password)){
      let user = getUser(email, password);
      localStorage.setItem("user", JSON.stringify({email: user.email, username: user.username}));
      return navigate("/")
    } else if((validateEmail(email) && validatePasswordLength(password)) && !validateEmailAndPassword(email, password)){
      Swal.fire({
        icon: 'error',
        text: 'Por favor vuelva a intentarlo, sus credenciales son inválidas',
      })
    }
  }

  return (
    <div>
      <Header showLogout={showLogout} />
        <section className="container-login">
            <h2 className="title-login">Iniciar Sesión</h2>
            <div className="row">
              <label className="label-login">Correo electrónico</label>
              <input type="email" className="input-login" onChange={handleOnChangeEmail}/>
              <label className="label-login">Contraseña</label>
              <input type="password" className="input-login" onChange={handleOnChangePassword}/>
            </div>
            <button className="btn-login" onClick={handleSubmit}>Ingresar</button>
            <div className="alternative-login">
              <span className="span-login">¿Aún no tienes cuenta?</span><Link to="/register"><span className="link-register">Registrate</span></Link>
            </div>
        </section>
      <Footer/>
    </div>
  );
}

export default LogIn;