import React from "react";
import "./BookingForm.css";

const BookingForm = (props) => {

    return (
        <>
            <h2 style={{ textAlign: 'left', width:'100%', marginTop: '20px' }}>Completá tus datos</h2>
            <div className="form-main-container">
                <div className="form-sub-container">
                    <label className="label-booking-form">Nombre</label>
                    <input type="Nombre" className="input-booking-form"/>
                    <label className="label-booking-form">Correo</label>
                    <input type="Correo" className="input-booking-form" />
                </div>
                <div className="form-sub-container">
                    <label className="label-booking-form">Apellido</label>
                    <input type="Apellido" className="input-booking-form"/>
                </div>
            </div>
    </>
    );

}

export default BookingForm;