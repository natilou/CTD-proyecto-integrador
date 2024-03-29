import React from 'react';
import Swal from 'sweetalert2';
import CardRecommendation from '../CardRecommendation';
import "./BookingUser.css";

function BookingUser({ data }){

  function deleteBookingId(e){
    let id = e.target.id
    console.log(id)
    Swal.fire({
      title: '¿Deseas Eliminar esta reserva?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOperation(id)
      } else if (result.isDenied) {
        Swal.fire('La reserva no fue eliminada', '', 'success')
      }
    })
  }

  function deleteOperation(id) {
    const jwt =  JSON.parse(localStorage.getItem("jwt"));
    fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/bookings/${Number(id)}`, {
      method: "DELETE",
      headers: {
        "Authorization": `${jwt.token}`,
        "content-type": "application/json",
        "accept": "application/json"
      }
    }).then(response => {
      if(!response.ok){
        Swal.fire({
          icon: 'error',
          text: 'Ha ocurrido un problema, por favor intenta nuevamente.',
        })
      } else {
        return response.json()
        .then(
          Swal.fire({
            icon: 'success',
            text: 'La reserva se eliminó correctamente',
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(()=>{
                window.location.reload()
                },500) 
            }}
          )
        )}
    })
  }
  return (
    <>
      <section className="container_cards_recommendation">
        {
          data.map((item) => (
       
            <section className='container_booking_cars' key={item.id}>
              <div className='container_title_booking'>
                <h2 className='title_booking_cars' >Tu Reserva {item.initialDate} hasta {item.endDate}</h2>
                <button className='btn_delete_booking' id={item.id} onClick={deleteBookingId}>x</button>
              </div>
              <CardRecommendation dataLodging={item.product} />
            </section>

          ))
        }

      </section>
    </>
  )
}

export default BookingUser;