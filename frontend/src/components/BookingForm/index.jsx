import React from "react";
import "./BookingForm.css";

const BookingForm = ({ user }) => {


    return (
        <div className="booking-form-container">
            <h2 style={{ textAlign: 'left', width:'100%', marginTop: '20px' }}>Tus datos</h2>
            <div className="form-main-container">
                <div className="form-sub-container">
                    <label className="label-booking-form">Nombre</label>
                    <input type="Nombre" className="input-booking-form" value={user.name} disabled/>
                    <label className="label-booking-form">Correo</label>
                    <input type="Correo" className="input-booking-form" id="correo-booking-form" value={user.email} disabled/>
                </div>
                <div className="form-sub-container">
                    <label className="label-booking-form">Apellido</label>
                    <input type="Apellido" className="input-booking-form" value={user.lastName} disabled/>
                </div>
            </div>
    </div>
    );

}

export default BookingForm;