import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Booking.css"
import CalendarBooking from "../../components/CalendarBooking";
import ProductPolices from "../../components/ProductPolices";
import BookingForm from "../../components/BookingForm";
import BookingDetail from "../../components/BookingDetail";


function Booking() {
    const [productImages, setProductImages] = useState([]);
    const [productPolicies, setProductPolicies] = useState([]);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [start, setStar] = useState(null);
    const [end, setEnd] = useState(null);
    const [unavailableDates, setUnavailableDates] = useState([]);
    const { id } = useParams()
    const showLogin = true;
    const showLogout = true;
    const showLine = true;
    const urlProductID = ` http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}`;
    const unavailableDatesUrl = `http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}/unavailableDates`


    const user = JSON.parse(localStorage.getItem("user"));
  
    useEffect(() => {
        getData();
    }, []);

    function handleStartDateChange(date) {
        setStar(date)
    }

    function handleEndDateChange(date) {
        setEnd(date)
    }

    async function getData() {
        setIsLoading(true);
        try {
            setIsLoading(true);
            await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}/images`)
                .then((response) => response.json())
                .then((data) =>
                    setProductImages(data));
            await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/policies/product/${id}`)
                .then((response) => response.json())
                .then((data) =>
            setProductPolicies(data));
            await fetch(urlProductID)
                .then((response) => response.json())
                .then((data) => setProduct(data));
            await fetch(unavailableDatesUrl)
                .then((response) => response.json())
                .then((response) => {
                    setUnavailableDates(response)
                })
            setIsLoading(false);
        } catch (error) {
            console.log({ error });
            setIsLoading(false);
        }
    }

    return (
        <>
            {
                isLoading ? (
                    <div style = {{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}} >
                        <span className="loading-spa">Cargando...</span>
                    </div > 
                ) : (
                    <div className="booking-main-container-product">
                        <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
                            <div>
                                <div className="booking-block-header">
                                    <div className="booking-block-header-titles">
                                        <h3 className="booking-block-d">{product.category.title}</h3>
                                        <h2>{product.title}</h2>
                                    </div>
                                    <div className="booking-icon-back">
                                        <Link className="go-product-button" to={`/product/${product.category.title}/${product.id}`}>
                                            <img className="booking-back-icon" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="booking-form-main-container" >
                                    <div className="booking-form-and-calendar-container">
                                        <BookingForm user={user} />
                                        <div className="booking-calendar-container">
                                            <h2 style={{ marginBottom: '20px' }}>Seleccioná tu fecha de reserva</h2>
                                            <CalendarBooking handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} unavailableDates={unavailableDates} />
                                        </div>
                                    </div>
                                    <div className="booking-detail-container">
                                        <BookingDetail user={user} productImages={productImages} product={product} start={start} end={end}/>
                                    </div>
                                </div>
                                <ProductPolices productPolicies={productPolicies}/>
                            </div>
                        <Footer />
                    </div>
                )
            }
        </>   
    );
}

export default Booking;