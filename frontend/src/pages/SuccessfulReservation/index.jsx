import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./SuccessfulReservation.css"


function SuccessfulReservation(){


    return(
        <>
            <Header />
            <section className="successful-reservation-container">
                <div className="message-container">
                    <img src={"./iconCheck.png"} alt="check" className="check-icon" />
                    <h2 className="message-title">¡Muchas gracias!</h2>
                    <h3 className="second-message-title">Tu reserva se ha realizado con éxito</h3>
                    <Link to="/"><button className="btn-successful">Ok</button></Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SuccessfulReservation;