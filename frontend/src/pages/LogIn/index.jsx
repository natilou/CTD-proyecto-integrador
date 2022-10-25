import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./LogIn.css"


function LogIn() {
const showLogout=true


    return (
      <div>
        <Header showLogout={showLogout} />
        <h1>inicio de sesion</h1>
        <Footer/>
      </div>
    );
  }
  
  export default LogIn;
