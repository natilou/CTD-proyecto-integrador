import "./BookingAction.css";

function BookingAction({ handleBookingButtonClick }){
    return(
        <div className="booking-action">
            <div>
                <h4 className="booking-message">Agregá tus fechas de viaje para obtener precios exactos</h4>
            </div>
            <button onClick={() => handleBookingButtonClick()} className="btn-booking">Iniciar reserva</button>
            <br/>
        </div>
    )
}

export default BookingAction;