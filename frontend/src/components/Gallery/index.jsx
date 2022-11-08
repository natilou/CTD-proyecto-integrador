import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Carousel from "../Carousel";
import { useMediaQuery } from 'react-responsive';
//import Axios from 'axios'


const Gallery = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  console.log(productImages);

  // useEffect(() => {
  //   Axios.get("http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories").then((response) => {
  //     console.log(response.data);
  //   })
  // }, []);

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, []);

  useEffect(() => {
    fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories').then((response) => response.json())
    // .then((data) => console.log(data))
  }, []);



  // useEffect(() => {
  //   fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'application/json',
  //       'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
  //     }

  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, []);

  // console.log(response.data);
  // setProductImages(response.data.data);
  // console.log(productImages, 'dentro de fetch');

  // async function getProductImages() {


  // }

  const images = [
    {
        id: 1,
        url: "https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg",
        productId: 1,
    },
    {
        id: 2,
        url: "https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg",
        productId: 1,
    },
    {
        id: 3,
        url: "https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg",
        productId: 1,
    },
    {
        id: 4,
        url: "https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg",
        productId: 1,
    },
    {
        id: 5,
        url: "https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg",
        productId: 1,
    },
    {
        id: 6,
        url: "https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg",
        productId: 1,
    },
    {
        id: 7,
        url: "https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg",
        productId: 1,
    },
    {
        id: 8,
        url: "https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg",
        productId: 1,
    },
  ]

  // useEffect(() => {
  //   // TODO cambiar url
  //   axiosConnection
  //     .get("/imagenes/listarImagenes")
  //     .then((response) => {
  //       setDataImagen(response.data.data);
  //       console.log(dataImagen);
  //     });
  //   return
  // }, []);

  return (
    <>
      {
        showCarousel | isMobile ? (
          <>
          {
            !isMobile && (
              <div className="carousel-button-container">
              <button className="carousel-button" onClick={() => setShowCarousel(false)}>Cerrar</button>
            </div>
            )
          }
          <Carousel />
        </>

        ) : (
          <div className="main-container">
            <div className="main-images-container">
              <div className="main-image-container">
                <img src={images[0].url} alt="" className="main-image"/>
              </div>
              <div className="secondary-images-container">
                <div className="secondary-images-sub-container">
                  <img src={images[1].url} alt="" className="secondary-images"/>
                  <img src={images[2].url} alt="" className="secondary-images"/>
                </div>
                <div className="secondary-images-sub-container">
                  <img src={images[3].url} alt="" className="secondary-images"/>
                  <img src={images[4].url} alt="" className="secondary-images"/>
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
