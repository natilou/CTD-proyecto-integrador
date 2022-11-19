import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Booking.css"
import CalendarProduct from "../../components/CalendarProduct";
import ProductPolices from "../../components/ProductPolices";
import BookingForm from "../../components/BookingForm";
import BookingDetail from "../../components/BookingDetail";


function Booking() {
    const [productImages, setProductImages] = useState([]);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [start, setStar] = useState(null);
    const [end, setEnd] = useState(null);
    const { id } = useParams()
    const { category } = useParams()
    const showLogin = true;
    const showLogout = true;
    const showLine = true;
    const urlProductID = ` http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}`;

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
            await fetch(urlProductID)
                .then((response) => response.json())
                .then((data) => setProduct(data));
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
                                        <h3 className="booking-block-d">{category}</h3>
                                        <h2>{product.title}</h2>
                                    </div>
                                    <div className="booking-icon-back">
                                        <Link className="go-product-button">
                                            <img className="booking-back-icon" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="booking-form-main-container" >
                                    <div className="booking-form-and-calendar-container">
                                        <BookingForm />
                                        <div className="booking-calendar-container">
                                            <h2 style={{ marginBottom: '20px' }}>Seleccioná tu fecha de reserva</h2>
                                            <CalendarProduct handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} />
                                        </div>
                                    </div>
                                    <div className="booking-detail-container">
                                        <BookingDetail productImages={productImages} product={product} start={start} end={end} />
                                    </div>
                                </div>
                                <ProductPolices />
                            </div>
                        <Footer />
                    </div>
                )
            }
        </>   
    );
}

export default Booking;