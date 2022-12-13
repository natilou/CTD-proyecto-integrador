import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getRandomGif } from '../../components/FilterResults/utils'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductAdmin from '../../components/ProductAdmin'
import "./ProductAdministration.css"


function ProductAdministration() {
  let gif = getRandomGif();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt =  JSON.parse(localStorage.getItem("jwt"));
  const header = {
    "Authorization": `${jwt.token}`,
    "content-type": "application/json",
    "accept": "application/json"
}

// const product = [
//     {
//         id: 1,
//         title: "Hunid",
//         category: {
//             id: 1,
//             title: "Hoteles",
//             description: "Hotel",
//             urlImage: "https://www.cronista.com/files/image/307/307135/5ffe2f480d5e8.jpg",
//             productAmount: 8
//         },
//         address: "Sarmiento y Uruguay",
//         city: {
//             id: 1,
//             name: "Buenos Aires",
//             country: {
//                 id: 1,
//                 name: "Argentina"
//             }
//         },
//         description: "El Huinid Obelisco Hotel se encuentra en Buenos Aires, a menos de 1 km del Obelisco de Buenos Aires, y ofrece alojamiento con centro de fitness, estacionamiento privado y bar. El alojamiento está a unos 2,1 km de la basílica del Santísimo Sacramento, a 2,2 km del centro cultural Kirchner y a 2,5 km de la plaza de Mayo. Hay recepción 24 horas y wifi gratis en todas las instalaciones.\n\nLas habitaciones disponen de aire acondicionado, escritorio, caja fuerte, TV de pantalla plana y baño privado con bidet. También incluyen armario.\n\nEl Huinid Obelisco Hotel sirve un desayuno buffet.\n\nEn las inmediaciones hay varios lugares de interés, como el teatro Colón, la cafetería Tortoni y el Palacio Barolo. El aeropuerto más cercano es el aeropuerto Jorge Newbery, ubicado a 6 km del Huinid Obelisco Hotel.\n\nNuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes. ",
//         coverImageUrl: "https://s3-group-10-c6.s3.us-east-2.amazonaws.com/1-1-portada.jpg"
//     },
// ]

  useEffect(() => {
    getAdminProducts(user.id)
  }, [])


  async function getAdminProducts(id) {
    setIsLoading(true);
    try {
      setIsLoading(true);
      await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/admin', {    
      method: "GET",
      headers: header,})
        .then((response) => response.json())
        .then((data) => { setProduct(data) });
      setIsLoading(false);

    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  }
  return (
    <>
      {
        isLoading
          ? (
            <div style={{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20%', fontSize: "100px" }} >
              <span className="loading-spa">Cargando...</span>
            </div >)
          : (
          <>
            <Header />
            <div className="block_header" data-testid="product-header">
              <div className="block_header_titles" data-testid="product-title-container">
                <h2 className="block_name" data-testid="product-id">Mis Publicaciones
                </h2>
              </div>
              <div className="icon_back" data-testid="product-icon-back">
                <Link to="/" className="back_image">
                  <img className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" data-testid="product-img" />
                </Link>
              </div>
            </div>
            {
              product &&
              (<div>
                <ProductAdmin data={product} />
              </div>)
            }
            {
              !product &&
              (
                <Link to="/">
                  <div className="not-found">
                    <img className="gif-not-found" src={gif} alt="no hay productos disponibles" />
                    <p className="not-found-message_">Lo sentimos, no hay productos disponibles.</p>
                    <button className="btn-successful-r" data-testid="btn-successful">Buscar tu mejor oferta</button>
                  </div>
                </Link>)
            }
            <Footer />
          </>
          )
      }
    </>
  );
}
export default ProductAdministration;