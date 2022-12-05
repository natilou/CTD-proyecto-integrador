import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./UserReservation.css"

function UserReservation() {

  const showBtnReservation = false;
  return (
    <>
      <Header showBtnReservation={showBtnReservation} />
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
      <Link to="/">
        <div className="super-container-r">
          <section className="successful-booking-container-r" data-testid="successful-container">
            <div className="message-container-r" data-testid="message-container">
              <img src={"https://cdn-icons-png.flaticon.com/512/4812/4812869.png"} alt="check" className="check-icon" data-testid="check-icon" />
              <h2 className="message-title" data-testid="message-title">¡UP'S !</h2>
              <h3 className="second-message-title-r" data-testid="second-message-title">Aún no has efectuado ninguna reserva</h3>
              <button className="btn-successful-r" data-testid="btn-successful">Buscar tu mejor oferta</button>
            </div>
          </section>
        </div>
      </Link>
      <Footer />
    </>
  )
}
export default UserReservation;