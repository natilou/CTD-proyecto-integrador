import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import iconGps from "../../assets/images/Vector.png";
import "./Product.css"
import Gallery from "../../components/Gallery";

function Product() {
  const [productImages, setProductImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id}= useParams()
  const showLogin = true ;
  const showLogout = true;
  const showLine = true;

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    setIsLoading(true);
    try {
      setIsLoading(true);
      await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/1/images')
      .then((response) => response.json())
      .then((data) =>
      setProductImages(data));
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  }


    return (
      <div className="main_container_product" data-testid="product-container">
         <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine}/>
         <div className="block_header" data-testid="product-header">
            <div className="block_header_titles" data-testid="product-title-container">
                <h3 className="block_d" data-testid="product-title">HOTEL</h3>
                <h2 className="block_name" data-testid="product-id">{id}</h2>
            </div>
            <div className="icon_back" data-testid="product-icon-back">
                 <Link to="/" className="back_image">
                    <img  className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" data-testid="product-img" />
                </Link>
            </div>
         </div>
         <div className="block_header_location" data-testid="product-location-header">
             <div className="location_lodging" data-testid="product-lodging">
                <div>
                    <img className="icongps" src={iconGps} alt="icon gps" data-testid="product-icon"/>
                    <p className="" data-testid="product-city"> Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina </p>
                </div>  
                    <p data-testid="product-distance"> A 920 m del centro</p>     
              </div>
              <div className="">
                   <div>

                   </div>
                   <div>

                   </div>
              </div>
         </div>
         <div className="container_gallery" data-testid="product-gallery">
         {
            !isLoading ? (
              <Gallery images={productImages}/>
            ) : (
              <div style={{ width: '90%',  height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span className="loading-spa">Loading...</span>
              </div>
            )
          }

         </div>

         <Footer/>
      </div>
    );
  }
  
  export default Product;
  
 