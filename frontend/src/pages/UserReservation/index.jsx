import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookingUser from '../../components/BookingUser'
import { getRandomGif } from '../../components/FilterResults/utils'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./UserReservation.css"


function UserReservation() {
  let gif = getRandomGif();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getUserBooking(user.id)
  }, [])


  async function getUserBooking(id) {
    setIsLoading(true);
    try {
      setIsLoading(true);
      await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/bookings/users/${Number(id)}`)
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
          : (<>
            <Header />
            <div className="block_header" data-testid="product-header">
              <div className="block_header_titles" data-testid="product-title-container">
                <h2 className="block_name" data-testid="product-id">Mis Reservas
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
                <BookingUser data={product} />
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
export default UserReservation;