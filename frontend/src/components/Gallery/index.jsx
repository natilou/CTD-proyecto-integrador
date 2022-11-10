import React, { useState } from "react";
import "./Gallery.css";
import Carousel from "../Carousel";
import { useMediaQuery } from 'react-responsive';


const Gallery = (props) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

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
          <div className="main-container" data-testid="main-container">
            <div className="main-images-container" data-testid="main-images-container">
              <div className="main-image-container" data-testid="main-image-container">
                <img src={props.images[0].url} alt="" className="main-image" data-testid="main-image"/>
              </div>
              <div className="secondary-images-container" data-testid="secondary-imgs-container">
                <div className="secondary-images-sub-container" data-testid="secondary-img-container">
                  <img src={props.images[1].url} alt="" className="secondary-images" data-testid="secondary-img-1"/>
                  <img src={props.images[2].url} alt="" className="secondary-images" data-testid="secondary-img-2"/>
                </div>
                <div className="secondary-images-sub-container" data-testid="secondary-imgs-container-2">
                  <img src={props.images[3].url} alt="" className="secondary-images" data-testid="secondary-img-3"/>
                  <img src={props.images[4].url} alt="" className="secondary-images" data-testid="secondary-img-4"/>
                </div>
              </div>
            </div>
            <div className="button-container" data-testid="btn-container">
              <button className="gallery-button" onClick={() => setShowCarousel(true)} data-testid="gallery-btn">Ver mas</button>
            </div>
          </div>
        )
      }

    </>
  );

}

export default Gallery;