import "./BookingAction.css";

function BookingAction(){
    return(
        <div className="booking-action">
            <div>
                <h4 className="booking-message">Agregá tus fechas de viaje para obtener precios exactos</h4>
            </div>
            <button className="btn-booking">Iniciar reserva</button>
        </div>
    )
}

export default BookingAction;