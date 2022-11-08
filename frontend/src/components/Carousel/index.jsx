import React, { useState, useEffect } from "react";
import ImageGallery from 'react-image-gallery';
import "./Carousel.css";



const Carousel = (props) => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCarouselImages();
  }, []);

  async function getCarouselImages() {
    setIsLoading(true);
      const img = props.images.map((item) => {
        return (
          {
            id: item.id,
            title: item.title,
            original: item.url,
            thumbnail: item.url,
          }
        )
      });
      setCarouselImages(img);
      setIsLoading(false);
  }

  return (
    <>
      {
        !isLoading ? (
          <ImageGallery items={carouselImages} thumbnailPosition="right" showIndex="true" showBullets="true"/>
        ) : (
          <div style={{ width: '90%',  height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span className="loading-spa">Loading...</span>
          </div>
        )
      }
      
    </>
  );
}

export default Carousel;
