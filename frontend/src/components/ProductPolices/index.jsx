import React from "react";

const ProductPolices = (props) => {

    return (
    <>
        <h2 className="title_politics">Qué tenés que saber</h2>
        <hr className="hr" />
        <div className="container_politics">
            <div className="type_politic">
                <h3>Normas de la casa</h3>
                <p className="politic">Check-out: 10:00</p>
                <p className="politic">No se permiten fiestas</p>
                <p className="politic">No fumar</p>
            </div>
            <div className="type_politic">
                <h3>Salud y seguridad</h3>
                <p className="politic">se aplican las pautas de distanciamiento social y otras
                    normas relacionadas con el coranavirus</p>
                <p className="politic">Detector de humo</p>
                <p className="politic">Depósito de seguridad</p>
            </div>
            <div className="type_politic">
                <h3>Política de cancelación</h3>
                <p className="politic"> Agrega las fechas de tu viaje para obtener los detalles
                    de cancelación de esta estadia.</p>
            </div>
        </div>
    </>
    );

}

export default ProductPolices;