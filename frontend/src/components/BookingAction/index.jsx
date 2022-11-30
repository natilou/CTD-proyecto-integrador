import { useNavigate } from "react-router-dom";
import "./BookingAction.css";
import Swal from 'sweetalert2';

function BookingAction({ id }){

    const user = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const handleClick = () => {
        user ? 
        navigate(`/booking/${id}`)
        : 
         Swal.fire({
            icon: 'error',
            text: 'Debes iniciar sesión para realizar una reserva',
         }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(()=>{
                return navigate("/login")
                },500) 
            }}) 
    }

    return(
        <div className="booking-action">
            <div>
                <h4 className="booking-message">Agregá tus fechas de viaje para obtener precios exactos</h4>
            </div>
             <button  className="btn-booking" onClick={handleClick}>Iniciar reserva</button>
            <br/>
        </div>
    )
}

export default BookingAction;