import React from 'react';
import Swal from 'sweetalert2';
import CardRecommendation from '../CardRecommendation';
import "./BookingUser.css";

function BookingUser({ data }){

  function deleteBookingId(id){
    Swal.fire({
      title: '¿Deseas Eliminar esta reserva?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('La reserva se Elimino!', '', 'success')
        deleteOperation(id)
        setTimeout(()=>{
        window.location.reload(true)
        }, 900)
      } else if (result.isDenied) {
        Swal.fire('Las mejores opciones', '', 'success')
      }
    })
  }

  async function deleteOperation(id) {
    let result = await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/bookings/${Number(id)}`, {
      method: "DELETE"

    });console.log(result)
  }

  return (
    <>
      <section className="container_cards_recommendation">
        {
          data.map((item) => (
            <section className='container_booking_cars' key={item.id}>
              <div className='container_title_booking'>
                <h2 className='title_booking_cars' >Tu Reserva {item.initialDate} hasta {item.endDate}</h2>
                <button className='btn_delete_booking' onClick={deleteBookingId}>x</button>
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