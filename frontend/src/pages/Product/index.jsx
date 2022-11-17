import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import iconGps from "../../assets/images/Vector.png";
import "./Product.css"
import Gallery from "../../components/Gallery";
import iconStar from "../../assets/images/icons/iconStar1.png";
import CalendarProduct from "../../components/CalendarProduct";
import BookingAction from "../../components/BookingAction";
import ProductPolices from "../../components/ProductPolices";
import Booking from '../Booking';


function Product() {
    const [productImages, setProductImages] = useState([]);
    const [product, setProduct] = useState([]);
    const [features, setFeatures] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [showBookingScreen, setShowBookingScreen] = useState(false);
    const { id } = useParams()
    const { category } = useParams()
    const showLogin = true;
    const showLogout = true;
    const showLine = true;
    const urlFeaturesID = `http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}/features`;
    const urlProductID = ` http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${id}`;

    useEffect(() => {
        getData();
    }, []);

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
            await fetch(urlFeaturesID)
                .then((response) => response.json())
                .then((cities) => setFeatures(cities));
            setIsLoading(false);
        } catch (error) {
            console.log({ error });
            setIsLoading(false);
        }
    }

    function handleBookingButtonClick() {
        setShowBookingScreen(!showBookingScreen);
    }

    return (
        <>
            {
                isLoading ? (
                    <div style = {{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}} >
                        <span className="loading-spa">Cargando...</span>
                    </div > 
                ) : (
                    <div className="main_container_product" data-testid="product-container">
                        <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />            
                        {
                            showBookingScreen ? (
                                <Booking />
                            ) : (
                                <>
                                    <div className="block_header" data-testid="product-header">
                                        <div className="block_header_titles" data-testid="product-title-container">
                                            <h3 className="block_d" data-testid="product-title">{category}</h3>
                                            <h2 className="block_name" data-testid="product-id">{product.title}</h2>
                                        </div>
                                        <div className="icon_back" data-testid="product-icon-back">
                                            <Link to="/" className="back_image">
                                                <img className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" data-testid="product-img" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="block_header_location" data-testid="product-location-header">
                                        <div className="container_header_location" data-testid="product-lodging">
                                            <div className="block_location">
                                                <img className="block_icongps" src={iconGps} alt="icon gps" data-testid="product-icon" />
                                                <p className="block_city" data-testid="product-city">Ciudad de {product.city.name},{product.city.country.name}</p>
                                            </div>
                                            <p className="address_header" data-testid="product-distance"> {product.address}</p>
                                        </div>
                                        <div className="block_container_score">
                                        <div>
                                            <p className="state_score_header">Muy bueno</p>
                                            <ul className="list_star_header">
                                                <li>
                                                    <img src={iconStar} alt="star" className="icon_star_header" />
                                                </li>
                                                <li>
                                                    <img src={iconStar} alt="star" className="icon_star_header" />
                                                </li>
                                                <li>
                                                    <img src={iconStar} alt="star" className="icon_star_header" />
                                                </li>
                                                <li>
                                                    <img src={iconStar} alt="star" className="icon_star_header" />
                                                </li>
                                                <li>
                                                    <img src={iconStar} alt="start" className="icon_star_header" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="container_number_header">
                                            <p className="number_score">8</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="container_gallery" data-testid="product-gallery">
                                        <Gallery images={productImages} />
                                    </div>
                                    <div className="description_product">
                                        <h2 className="title_description_product">Alojate en el corazón de {product.city.name}</h2>
                                        <p className="text_description" >
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="container_features">
                                        <h2 className="title_features">¿Qué ofrece este lugar?</h2>
                                        <hr className="hr" />
                                        <div className="container_icon_features">
                                            {
                                                features &&
                                                features.map((item) => (
                                                    <div className="icons_features" key={`${id}${item.name}`}>
                                                        <img className="img_features" src={`https://res.cloudinary.com/dbdrkxooj/image/upload/v1667983955/DH-PI/${item.name}.png`} alt={`icon ${item.name}`} />
                                                        <p>{item.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <ProductPolices />
                                    <div className="container_booking">
                                        <h2 className="title_booking">Fechas disponibles</h2>
                                        <div className="calendar-booking-container">
                                            <div className="booking-row">
                                                <div className="booking-col">
                                                    <CalendarProduct />
                                                </div>
                                                <div className="booking-col">
                                                    <BookingAction id={id}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Footer />
                                </>
                            )
                        }
                    </div>
                )
            }
        </>   
    );
}

export default Product;

