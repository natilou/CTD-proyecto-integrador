import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import iconGps from "../../assets/images/Vector.png";
import "./Product.css"
import Gallery from "../../components/Gallery";
import iconStar from "../../assets/images/icons/iconStar1.png";

function Product() {
    const { id } = useParams()
    const showLogin = true;
    const showLogout = true;
    const showLine = true;

    return (
        <div className="main_container_product">
            <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
            <div className="block_header">
                <div className="block_header_titles">
                    <h3 className="block_d">HOTEL</h3>
                    <h2 className="block_name">{id}</h2>
                </div>
                <div className="icon_back">
                    <Link to="/" className="back_image">
                        <img className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="block_header_location">
                <div className="container_header_location">
                    <div className="block_location">
                        <img className="block_icongps" src={iconGps} alt="icon gps" />
                        <p className="block_city">Ciudad Autonoma de Buenos Aires, Argentina </p>
                    </div>
                    <p className="address_header"> A 920 m del centro</p>
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
            <div className="container_gallery">
                <Gallery />
            </div>

            <div className="description_product">
                <h2 className="title_description_product">Alojate en el corazon de Buenos Aires</h2>
                <p className="text_description" >Esta situado a solo unas calles de la avenida Alvear, 
                    de la avenida Quintana, del parque Martin y del distrito de
                    Recoleta. En las inmediaciones tambien hay varios lugares de interes, 
                    como la calle Florida, e centro comercial Galerias Pacifico, la zona del 
                    Puerto Madero, la plaza de Mayo y el palacio Municipal.
                    Nuestro clientes dicen que esta parte de Buenos Aires es su favorita, segun
                    los comentorios independiente.
                    El Hotel sofisticado de 4 estrellas que goza de una ubicacion tranquila, o poca 
                    distancia de prestigiosas de arte, teatros, museos y zonas comerciales. Ademas hay WIFI 
                    gratuita. El estrablecimiento sirve un desayuno variado de 07:00 a 10:30.           
                    </p>
            </div>
            <div className="container_features">
                <h2>¿Que ofrece este lugar?</h2>
                <hr className="hr"/>
                <p></p>
            </div>
            <h2 className="title_politics">Que tenes que saber</h2>
            <hr className="hr"/>
            <div className="container_politics">
                <div className="type_politic">
                    <h3>Normas de la casa</h3>
                    <p className="politic">Check-out: 10:00</p>  
                    <p className="politic">No se permiten fiestas</p> 
                    <p className="politic">No fumar</p>             
                </div>
                <div className="type_politic">
                    <h3>Salud y seguridad</h3>
                    <p className="politic">se aplican las pautas de distanciamiento social y otras
                        normas relacionadas con el coranavirus</p>  
                    <p className="politic">Detector de humo</p>
                    <p className="politic">Deposito de seguridad</p>              
                </div>
                <div className="type_politic">
                    <h3>Politica de cancelacion</h3>
                    <p className="politic"> Agrega las fechas de tu viaje para obtener los detalles
                         de cancelacion de esta estadia.</p>  
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;

