import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Product.css"

function Product() {
    const {id }= useParams()
 
    return (
      <div>
         <Header/>
         <div className="block_header">
            <div className="block_header_titles">
                <h3>HOTEL</h3>
                <h2>{id}</h2>
            </div>
            <figure>
                
            </figure>

         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Product;
  