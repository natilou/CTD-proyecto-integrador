import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Lightbox from 'react-spring-lightbox';
import nextIcon from "../../assets/images/icons/next.png";
import prevIcon from "../../assets/images/icons/prev.png";


const Gallery = (props) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const newIndex = currentImageIndex - 1;
    if (currentImageIndex > 0){
      setCurrentIndex(newIndex);
    }
  }

  function goToNext() {
    const newIndex = currentImageIndex + 1;
    console.log({newIndex});
    if(newIndex !== carouselImages.length){
      setCurrentIndex(newIndex);
    }
    if(newIndex === carouselImages.length) {
      setCurrentIndex(0);
    }
  }

  useEffect(() => {
    getCarouselImages();
    
  },[]);

  async function getCarouselImages() {
    setIsLoading(true);
      const img = props.images.map((item) => {
        return (
          {
            id: item.id,
            title: item.title,
            src: item.url,
          }
        )
      });
      setCarouselImages(img);
      setIsLoading(false);
  }

  return (
    <>
      {
        showCarousel ? (
          <div className="carousel-container">
            {
              isLoading ? (
                <div style={{ width: '90%',  height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <span className="loading-spa">Cargando...</span>
                </div>
              ): (
                <Lightbox
                renderNextButton={() => (<button style={{ backgroundColor: 'transparent', border: 'none', zIndex: 5}} onClick={() => goToNext()}><img alt="next" src={nextIcon} style={{ width: "30px", height: "30px", marginRight: "10px" }} /> </button>)}
                renderPrevButton={() => (<button style={{ backgroundColor: 'transparent', border: 'none', zIndex: 5}} onClick={() => goToPrevious()}><img alt="previous" src={prevIcon} style={{ width: "30px", height: "30px", marginLeft: "10px" }} /> </button>)}
                isOpen={showCarousel}
                onPrev={goToPrevious}
                onNext={goToNext}
                images={carouselImages}
                currentIndex={currentImageIndex}
                renderHeader={() => (<button style={{ backgroundColor: '#F3F1ED', color: 'black', fontSize: '2.5rem', fontWeight: 'bold', width: '10%', alignSelf: 'end', border: 'none', paddingTop: "15px" }} onClick={() => setShowCarousel(false)}> x </button>)}
                style={{ background: '#F3F1ED' }}
            />
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
              <button className="gallery-button" onClick={() => setShowCarousel(true)} data-testid="gallery-btn">Ver más</button>
            </div>
          </div>
        )
      }

    </>
  );

}

export default Gallery;