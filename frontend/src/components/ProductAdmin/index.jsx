import React from 'react';
import Swal from 'sweetalert2';
import CardRecommendation from '../CardRecommendation';
import "./ProductAdmin.css";

function ProductAdmin({ data }){
  const jwt =  JSON.parse(localStorage.getItem("jwt"));
  const header = {
    "Authorization": `${jwt.token}`,
    "content-type": "application/json",
    "accept": "application/json"
}

  function deleteProduct(id){
    console.log(id)
    Swal.fire({
      title: '¿Deseas eliminar esta publicación?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        Swal.fire('La publicación se eliminó!', '', 'success')
        deleteOperation(id)
        setTimeout(()=>{
        window.location.reload(true)
        }, 900)
      } else if (result.isDenied) {
        Swal.fire('No se eliminará tu publicación', '', 'success')
      }
    })
  }

  async function deleteOperation(id) {
    let result = await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${Number(id)}`, {
      method: "DELETE",
      headers: header
    });console.log(result)
  }

  return (
    <>
      <section className="container_cards_recommendation">
        {
          data.map((item) => (
            <section className='container_booking_cars' key={item.id}>
              <div className='container_title_booking'>
                <h2 className='title_booking_cars' >{item.title}</h2>
                <button className='btn_delete_booking' onClick={() => deleteProduct(item.id)}>x</button>
              </div>
              <CardRecommendation dataLodging={item} />
            </section>

          ))
        }

      </section>
    </>
  )
}

export default ProductAdmin;