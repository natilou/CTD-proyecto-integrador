import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateEmail, validatePasswordLength, validatePasswordRegistrated, validateEmailRegistrated } from './utils'
import Swal from 'sweetalert2';


function LogIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayEmailError, setDisplayEmailError] = useState("none");
  const [displayPasswordError, setDisplayPasswordError] = useState("none");
  let navigate = useNavigate();

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

  function handleSubmit(){
    if(validateEmailRegistrated(email) && validatePasswordRegistrated(password)){
      return navigate("/")
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Por favor vuelva a intentarlo, sus credenciales son inválidas',
      })
    }
  }

  return (
    <div>
      <Header/>
        <section className="container-login">
            <h2 className="title-login">Iniciar Sesión</h2>
            <div className="row">
              <label className="label-login">Correo electrónico</label>
              <input type="email" className="input-login" onChange={handleOnChangeEmail}/>
              <p style={{display:displayEmailError}}>Correo electrónico inválido</p>
              <label className="label-login">Contraseña</label>
              <input type="password" className="input-login" onChange={handleOnChangePassword}/>
              <p style={{display:displayPasswordError}}>La contraseña debe tener más de 6 caracteres</p>
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
