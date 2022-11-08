import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import iconGps from "../../assets/images/Vector.png";
import "./Product.css"
import Gallery from "../../components/Gallery";

function Product() {
    const {id }= useParams()
    const showLogin = true ;
  const showLogout = true;
  const showLine = true;
 
    return (
      <div className="main_container_product">
         <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine}/>
         <div className="block_header">
            <div className="block_header_titles">
                <h3 className="block_d">HOTEL</h3>
                <h2 className="block_name">{id}</h2>
            </div>
            <div className="icon_back">
                 <Link to="/" className="back_image">
                    <img  className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo"  />
                </Link>
            </div>
         </div>
         <div className="block_header_location">
             <div className="location_lodging">
                <div>
                    <img className="icongps" src={iconGps} alt="icon gps" />
                    <p className=""> Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina </p>
                </div>  
                    <p> A 920 m del centro</p>     
              </div>
              <div className="">
                   <div>

                   </div>
                   <div>

                   </div>
              </div>
         </div>
         <div className="container_gallery">
         <Gallery/>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Product;
  
 