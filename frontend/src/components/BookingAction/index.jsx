import { Link } from "react-router-dom";
import "./BookingAction.css";

function BookingAction({ id }){
    return(
        <div className="booking-action">
            <div>
                <h4 className="booking-message">Agregá tus fechas de viaje para obtener precios exactos</h4>
            </div>
            <Link to={`/reserva/${id}`}>
            <button  className="btn-booking">Iniciar reserva</button>
            </Link>
            <br/>
        </div>
    )
}

export default BookingAction;