import React from "react";
import "./Register.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";


function Register() {
  const showlogin = true 
    return (
      <div>
        <Header showLogin={showlogin}/>
        <h1>Register</h1>
       <Footer/>
      </div>
    );
  }
  
  export default Register;