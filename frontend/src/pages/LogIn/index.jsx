import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"
import { Link, useNavigate } from "react-router-dom";
import { validateEmailRegex } from './utils'
import Swal from 'sweetalert2';
import { Formik, Field } from 'formik';
import { useState } from "react";

function LogIn() {
  const showLogout = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Debes completar el campo del correo electronico';
    } else if(!validateEmailRegex(value)){
      error = 'El correo electrónico ingresado es inválido'
    } else if (value && validateEmailRegex(value)){
      setEmail(value)
    }
    return error;
  };

  const validatePassword = value => {
    let error;
    if (!value) {
      error = 'Debes completar el campo de la contraseña';
    } else if (value.length < 6) {
      error = 'La contraseña debe tener más de 6 caracteres';
    } else if(value && value.length > 6){
      setPassword(value)
    }
    return error;
  };

  const handleSubmit = () => {
     
    if(!email && !password){
      Swal.fire({
        icon: 'error',
        text: 'Debes completar todos los campos correctamente para iniciar sesión',
      })
    }
    fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/auth/?email=${email}&password=${password}`, {
      method: "POST", 
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => {
      if(!response.ok){
        Swal.fire({
          icon: 'error',
          text: 'Credenciales inválidas. Por favor intenta nuevamente.',
        })
      } else {
        return response.json()
          .then(response => {
            localStorage.setItem("user", JSON.stringify({id: response.id, name: response.name, lastName: response.lastName, email: response.email, role: response.role})); 
            localStorage.setItem("jwt", JSON.stringify({token: response.token})); 
            navigate("/")      
        })
      }
    }).catch(error => console.log(error))
  }

  return (
    <div>
      <Header showLogout={showLogout} />
        <section className="container-login" data-testid="login-container">
            <h2 className="title-login" data-testid="login-title">Iniciar Sesión</h2>
            <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            >
            {({ errors, touched }) => (
              <form className="row">
                  <label className="label-login" data-testid="login-email-label">Correo electrónico</label>
                  <Field name="email" validate={validateEmail} className="input-login"  data-testid="login-email-input" />
                  {errors.email && touched.email ? (
                    <div className="error-input" data-testid="error-input">{errors.email}</div>
                  ) :  <div className="error-input"></div>}
                  <label className="label-login" data-testid="login-password-label">Contraseña</label>
                  <Field name="password" type="password" validate={validatePassword} className="input-login" data-testid="login-password-input"/>
                  {errors.password && touched.password ? (
                    <div className="error-input">{errors.password}</div>
                  ) :  <div className="error-input"></div>}
              </form>
            )}
          </Formik>
          <button onClick={handleSubmit} className="btn-login" data-testid="login-btn">Ingresar</button>
          <div className="alternative-login" data-testid="login-alternative">
            <span className="span-login" data-testid="login-span1-alternative">¿Aún no tienes cuenta?</span><Link to="/register" data-testid="register-link"><span className="link-register" data-testid="login-span2-alternative">Registrate</span></Link>
          </div>
        </section>
    <Footer/>
   </div>
  );
};

export default LogIn;