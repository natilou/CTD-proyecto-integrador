import React from "react";
import "./Carousel.css";
import ImageGallery from 'react-image-gallery';


const Carousel = () => {

  const images = [
    {
      original: 'https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg',
      thumbnail: 'https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg',
    },
    {
      original: 'https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg',
      thumbnail: 'https://phantom-elmundo.unidadeditorial.es/3221a050bdc965906082b1c3f61fd93b/crop/0x0/1328x884/resize/550/f/webp/assets/multimedia/imagenes/2021/05/17/16212483528638.jpg',
    },
    {
      original: 'https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg',
      thumbnail: 'https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg',
    },
  ];

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
    <ImageGallery items={images} slideOnThumbnailOver="true"/>
  );
}

export default Carousel;
