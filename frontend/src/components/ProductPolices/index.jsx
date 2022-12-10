import React, { useState, useEffect } from "react";

const ProductPolices = ({ productPolicies }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        getPolicies();
    }, [productPolicies]);


    function getPolicies() {
        setIsLoading(true);
        const policesName = productPolicies.map(police => {
            let name;
            if(police.type.id === 7) {
                name = 'Política de cancelación';
            }
            if(police.type.id === 8) {
                name = 'Normas de la casa';
            }
            if (police.type.id === 9) {
                name = 'Salud y seguridad';
            }
            return (
                {
                    id: police.id,
                    name,
                    description: police.description
                }
            )
        })
        setPolicies(policesName);
        setIsLoading(false);
    }


    return (
    <div style={{ marginBottom: 50 }}>
        {
            isLoading ? (
                <div style = {{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}} >
                    <span className="loading-spa">Cargando...</span>
                </div >
            ) : (
                <>
                        <h2 className="title_politics">Qué tenés que saber</h2>
        <hr className="hr" />
        <div className="container_politics">
            {
                policies.map(police => {
                    return (
                        <div className="type_politic" key={police.id}>
                            <h3>{police.name}</h3>
                            <p className="politic">{police.description}</p>
                        </div>
                    )
                    })
            }
        </div>

                </>
            )
        }

    </div>
    );

}

export default ProductPolices;