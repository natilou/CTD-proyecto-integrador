import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field } from 'formik';
import { validateEmailRegex, validatePasswordLength, validateEmailAndPassword, validatePasswordConfirmation } from '../LogIn/utils'
import Swal from 'sweetalert2';



function Register() {

  const showlogin = true; 
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false);
  let navigate = useNavigate();


  const Checkbox = ({ children, ...props }) => (
    <label style={{ marginRight: '1em' }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );

  const validateName = (value) => {
    let error;
    if (!value) {
      error = 'Debes completar el campo del nombre';
    } else {
      setName(value)
    }
    return error;
  }
  const validateLastName = (value) => {
    let error;
    if (!value) {
      error = 'Debes completar el campo del apellido';
    } else {
      setLastName(value)
    }
    return error;
  }
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Debes completar el campo del correo electronico';
    } else if(!validateEmailRegex(value)){
      error = 'El correo electrónico ingresado es inválido'
    } else if (value && validateEmailRegex(value)){
      setEmail(value);
    }
    return error;
  };
  
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = 'Debes completar el campo de la contraseña';
    } else if (value.length < 6) {
      error = 'La contraseña debe tener más de 6 caracteres';
    } else if(value && value.length > 6){
      setPassword(value);
    }
    return error;
  }
  const validateConfirmedPassword = (value) => {
    let error;
    if (!value) {
      error = 'Debes completar el campo de la contraseña';
    } else if( !validatePasswordConfirmation(password, value)){
      error = 'Las contraseñas no coinciden';
    } else if (value && validatePasswordConfirmation(password, value)){
      setConfirmedPassword(value);
    }
    return error;
   
  }

  function handleSubmit(){
    if(email === "" || name === "" || lastName === "" || password === "" || confirmedPassword === ""){
      Swal.fire({
        icon: 'error',
        text: 'Todos los campos son obligatorios',
      })
    } else {
      let payload = {
        name: name,
        lastName: lastName,
        email: email,
        password: confirmedPassword,
        role: isAdmin ? 1 : 0,
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
      .then(response => {
        if (!response.ok){
          Swal.fire({
            icon: 'error',
            text: 'Lamentablemente hubo un error durante el registro. Vuelve a intentarlo.',
          })
        } else {
          return response.json()
            .then(
              Swal.fire({
                icon: 'success',
                text: 'Usuario creado correctamente',
              }).then((result) => {
                if (result.isConfirmed) {
                  setTimeout(()=>{
                    return navigate("/login")
                    },500) 
                }}
              )
            )
        }
        
      })
    }
  }

  return (
      <div>
        <Header showLogout={showlogin} />
          <section className="container-register" data-testid="register-container">
            <h2 className="title-register" data-testid="register-title">Crear una cuenta</h2>
              <Formik
              initialValues={{
                name: '',
                lastName: '',
                email: '',
                password: '',
                confirmedPassword: '',
              }}
              >
              {({ errors, touched }) => (
                <form className="form-register">
                  <div className="row-register-with-col" data-testid="register-row-container-1">
                    <div className="col-register" data-testid="register-col-container-1">
                      <div className="row-register-with-col" data-testid="register-row-container-2">
                        <label className="label-register" data-testid="register-name-label">Nombre</label>
                      </div>
                        <div className="row-register-with-col" data-testid="register-col-container-2">
                          <Field name="name" type="text" validate={validateName} className="input-register" />
                        </div>
                    </div>
                    <div className="col-register" data-testid="register-col-1">
                      <div className="row-register-with-col" data-testid="register-row-container-3">
                        <label className="label-register" data-testid="register-name-label">Apellido</label>
                      </div>
                      <div className="row-register-with-col" data-testid="register-row-container-4">
                        <Field name="lastName" type="text" validate={validateLastName} className="input-register"/>
                      </div>
                    </div>
                  </div>
                  <div className="row-register-with-col" data-testid="register-col-container-2">
                      {errors.name && touched.name ? (
                        <div className="error-input-register">{errors.name}</div>
                      ) :  <div className="error-input-register"></div>}
                      {errors.lastName && touched.lastName ? (
                        <div className="error-input-register">{errors.lastName}</div>
                      ) :  <div className="error-input-register"></div>}
                  </div>
                  <div className="row-register" data-testid="register-row-1">
                    <label className="label-register" data-testid="login-password-label">Correo electrónico</label>
                    <Field name="email" type="email" validate={validateEmail} className="input-register"/>
                    {errors.email && touched.email ? (
                      <div className="error-input-register">{errors.email}</div>
                    ) :  <div className="error-input-register"></div>}
                  </div>
                  <div className="row-register" data-testid="register-row-2"> 
                    <label className="label-register" data-testid="login-password-label">Contraseña</label>
                    <Field name="password" type="password" validate={validatePassword} className="input-register"/>
                    {errors.password && touched.password ? (
                      <div className="error-input-register">{errors.password}</div>
                    ) :  <div className="error-input-register"></div>}
                  </div>
                  <div className="row-register" data-testid="register-row-3">
                    <label className="label-register" data-testid="login-password-label">Confirmar contraseña</label>
                    <Field name="confirmedPassword" type="password" validate={validateConfirmedPassword} className="input-register"/>
                    {errors.confirmedPassword && touched.confirmedPassword ? (
                      <div className="error-input-register">{errors.confirmedPassword}</div>
                    ) :  <div className="error-input-register"></div>}
                  </div>
                </form>
              )}
            </Formik>
            <div className="checkbox">
              <Checkbox
                checked={isAdmin}
                onChange={() => setIsAdmin((state) => !state)}
              >
                Quiero registrarme para publicar alojamientos
              </Checkbox>
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
