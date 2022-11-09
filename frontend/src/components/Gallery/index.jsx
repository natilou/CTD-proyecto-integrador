import React, { useState } from "react";
import "./Gallery.css";
import Carousel from "../Carousel";
import { useMediaQuery } from 'react-responsive';


const Gallery = (props) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });


  console.log(props.carouselImages, 'imagenes para el carrusel desde gallery')

  return (
    <>
      {
        showCarousel | isMobile ? (
          <div className="carousel-container">
            <Carousel images={props.images} />
            {
              !isMobile && (
                <div className="carousel-button-container">
                  <button className="carousel-button" onClick={() => setShowCarousel(false)}>Cerrar</button>
                </div>
              )
            }
          </div>

        ) : (
          <div className="main-container">
            <div className="main-images-container">
              <div className="main-image-container">
                <img src={props.images[0].url} alt="" className="main-image"/>
              </div>
              <div className="secondary-images-container">
                <div className="secondary-images-sub-container">
                  <img src={props.images[1].url} alt="" className="secondary-images"/>
                  <img src={props.images[2].url} alt="" className="secondary-images"/>
                </div>
                <div className="secondary-images-sub-container">
                  <img src={props.images[3].url} alt="" className="secondary-images"/>
                  <img src={props.images[4].url} alt="" className="secondary-images"/>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="gallery-button" onClick={() => setShowCarousel(true)}>Ver mas</button>
            </div>
          </div>
        )
      }

    </>
  );

}

export default Gallery;
