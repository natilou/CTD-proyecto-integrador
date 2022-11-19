import React from "react";
import { Link } from "react-router-dom";
import iconStar from "../../assets/images/icons/iconStar1.png";
import locationIcon from "../../assets/images/Vector.png";
import "./BookingDetail.css";

const BookingDetail = ({ product, productImages, start, end }) => {
    console.log({ start });
    console.log({ end });

    return (
        <div className="booking-detail-main-container">
            <h2 className="booking-detail-title">Detalles de la reserva</h2>
            <img src={productImages[0].url} alt={productImages[0].title} />
            <div style={{ marginTop: 20 }}>
                <h3 style={{ color: 'grey' }}>{product.category.title}</h3>
                <h3>{product.title}</h3>
                <ul className="booking-detail-icon-star-container">
                    <li>
                        <img src={iconStar} alt="star" className="booking-detail-star-icon" />
                    </li>
                    <li>
                        <img src={iconStar} alt="star" className="booking-detail-star-icon" />
                    </li>
                    <li>
                        <img src={iconStar} alt="star" className="booking-detail-star-icon" />
                    </li>
                    <li>
                        <img src={iconStar} alt="star" className="booking-detail-star-icon" />
                    </li>
                    <li>
                        <img src={iconStar} alt="start" className="booking-detail-star-icon" />
                    </li>
                </ul>
            </div>
            <div className="booking-detail-location-container">
                <div className="booking-detail-location-sub-container">
                    <img className="booking-detail-location-icon" src={locationIcon} alt="location icon" />
                    <p className="booking-detail-location-address"> {product.address}, </p>
                    <p className="booking-detail-location-city">Ciudad de {product.city.name}, {product.city.country.name}</p>
                </div>
            </div>
            <div className="booking-detail-check-in-container">
                <p style={{ fontWeight: 'bold' }}>
                    Check in
                </p>
                <p>
                    {start}
                </p>
            </div>
            <div className="booking-detail-check-out-container">
                <p style={{ fontWeight: 'bold' }}>
                    Check out
                </p>
                <p>
                    {end}
                </p>
            </div>
            <div className="booking-detail-submit-button-container">
                <Link to="/successful-booking"><button className="booking-detail-submit-button">
                    Confirmar reserva
                </button>
                </Link>

            </div>



        </div>
    );

}

export default BookingDetail;