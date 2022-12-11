import React from "react";
import { useNavigate } from "react-router-dom";
import iconStar from "../../assets/images/icons/iconStar1.png";
import locationIcon from "../../assets/images/Vector.png";
import "./BookingDetail.css";
import Swal from 'sweetalert2';


const BookingDetail = ({ user, product, productImages, start, end }) => {
    let navigate = useNavigate();
    const jwt =  JSON.parse(localStorage.getItem("jwt"));
    const urlBooking = `http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/bookings`
    const header = {
        "Authorization": `${jwt.token}`,
        "content-type": "application/json",
        "accept": "application/json"
    }
    const payload = {
        product: {
            id: product.id
        },
        initialDate: start,
        endDate: end,
        user:  {
            id: user.id
        }
    }

    const handleClick = () => {
        start && end ? 
        (
            fetch(urlBooking,{
                method: "POST",
                headers: header,
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(response => {
                !response
                ?
                Swal.fire({
                    icon: 'error',
                    text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
                })
                :
                navigate("/successful-booking")
            })
            .catch(error => console.log(error))
        )
        : 
         Swal.fire({
            icon: 'error',
            text: 'Debes seleccionar una fecha de check-in y check-out',
        })
    }

    return (
        <div className="booking-detail-main-container" data-testid="booking-detail-container">
            <h2 className="booking-detail-title" data-testid="booking-detail-title">Detalles de la reserva</h2>
            <img src={productImages[0].url} alt={productImages[0].title} data-testid="booking-detail-img"/>
            <div style={{ marginTop: 20 }} data-testid="booking-detail-sub-container">
                <h3 style={{ color: 'grey' }} data-testid="booking-detail-category">{product.category.title}</h3>
                <h3 data-testid="booking-detail-product">{product.title}</h3>
                <ul className="booking-detail-icon-star-container" data-testid="booking-detail-ul-start">
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
            <div className="booking-detail-location-container" data-testid="booking-detail-location">
                <div className="booking-detail-location-sub-container" data-testid="booking-detail-location-sub">
                    <img className="booking-detail-location-icon" src={locationIcon} alt="location icon" data-testid="booking-detail-location-img"/>
                    <p className="booking-detail-location-address" data-testid="booking-detail-address">{product.address}, </p>
                    <p className="booking-detail-location-city" data-testid="booking-detail-city">Ciudad de {product.city.name}, {product.city.country.name}</p>
                </div>
            </div>
            <div className="booking-detail-check-in-container" data-testid="booking-detail-check-in">
                <p style={{ fontWeight: 'bold' }}>
                    Check in
                </p>
                <p>
                    {start}
                </p>
            </div>
            <div className="booking-detail-check-out-container" data-testid="booking-detail-check-out">
                <p style={{ fontWeight: 'bold' }}>
                    Check out
                </p>
                <p>
                    {end}
                </p>
            </div>
            <div className="booking-detail-submit-button-container">
                <button className="booking-detail-submit-button" onClick={handleClick} data-testid="booking-detail-btn">
                    Confirmar reserva
                </button>
            </div>
        </div>
    );

}

export default BookingDetail;