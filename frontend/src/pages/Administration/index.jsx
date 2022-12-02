import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./Administration.css"


function Administration() {
    const [productName, setProductName] = useState("");
    console.log({ productName });
    const [productCategory, setProductCategory] = useState("");
    console.log({ productCategory });
    const [productAddress, setProductAddress] = useState("");
    console.log({ productAddress });
    const [productCity, setProductCity] = useState("");
    console.log({ productCity });
    const [productRules, setProductRules] = useState("");
    console.log({ productRules });
    const [productSecurity, setProductSecurity] = useState("");
    console.log({ productSecurity });
    const [productPolicy, setProductPolicy] = useState("");
    console.log({ productPolicy });
    const [productFeatures, setProductFeatures] = useState([]);
    console.log({ productFeatures });
    
    const features = [
        {
            id: 1,
            name: 'wifi',
        },
        {
            id: 2,
            name: 'aire',
        },
        {
            id: 3,
            name: 'free-parking',
        },
        {
            id: 4,
            name: 'gym',
        },
        {
            id: 5,
            name: 'spa',
        },
        {
            id: 6,
            name: 'kitchen',
        },
        {
            id: 7,
            name: 'microware',
        },
    ]
    
    const showLogin = true;
    const showLogout = true;
    const showLine = true;

    function handleNameChange(e){
        let productName = e.target.value;
        setProductName(productName)
    }

    function handleCategoryChange(e){
        let category = e.target.value;
        setProductCategory(category)
    }

    function handleAddressChange(e){
        let address = e.target.value;
        setProductAddress(address)
    }

    
    function handleCityChange(e){
        let city = e.target.value;
        setProductCity(city)
    }

    function handleDescriptionChange(e){
        let description = e.target.value;
        setProductCity(description)
    }

    function handleRulesChange(e){
        let rules = e.target.value;
        setProductRules(rules)
    }

    function handleSecurityChange(e){
        let security = e.target.value;
        setProductSecurity(security)
    }

    function handlePolicyChange(e){
        let policy = e.target.value;
        setProductPolicy(policy)
    }
    console.log({ productFeatures });
    
    function handleChange(e) {  
        var isChecked = e.target.checked;  
        var item = e.target.value;  
        
        console.log({isChecked});
        console.log({item});

        if(isChecked) {
            let productFeaturesClone = [...productFeatures]
            productFeaturesClone.push(item);
            setProductFeatures(productFeaturesClone);
        }
        if(!isChecked) {
            let productFeaturesClone = [...productFeatures]
            let newFeatures = productFeaturesClone.filter(feature => feature !== item);
            console.log({ newFeatures });
            setProductFeatures(newFeatures);
        }
  }  

    return (
        <div>
            <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
                <div className="admin-block-header">
                    <div className="admin-block-header-titles">
                        <h3 className="title" data-testid="product-title">Administración</h3>
                    </div>
                    <div className="icon_back" data-testid="product-icon-back">
                        <Link to="/" className="back_image">
                            <img className="back" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1667606967/DH-PI/arrows-icon-left-removebg-preview_idlpxq.png" alt="Logo" data-testid="product-img" />
                        </Link>
                    </div>
                </div>
                <div className="product-form-section">
                    <p className="product-form-title">
                        Crear propiedad
                    </p>
                </div>
                <div className="product-form-container">
                    <div className="product-form-inputs-container">
                        <div className="product-form-inputs-sub-container">
                            <label className="product-form-label">
                                Nombre
                            </label>
                            <input type="text" className="product-input" onChange={handleNameChange}/>
                        </div>
                        <div className="product-form-inputs-sub-container">
                            <label className="product-form-label">
                                Categoría
                            </label>
                            <input type="text" className="product-input" onChange={handleCategoryChange}/>
                        </div>
                    </div>
                    <div className="product-form-inputs-container">
                        <div className="product-form-inputs-sub-container">
                            <label className="product-form-label">
                                Dirección
                            </label>
                            <input type="address" className="product-input" onChange={handleAddressChange}/>
                        </div>
                        <div className="product-form-inputs-sub-container">
                            <label className="product-form-label">
                                Ciudad
                            </label>
                            <input type="text" className="product-input" onChange={handleCityChange}/>
                        </div>
                    </div>
                    <div className="product-form-description-container">
                        <div className="product-form-description-sub-container">
                            <label className="product-form-label">
                                Descripción
                            </label>
                            <textarea rows={6} className="product-text-area" onChange={handleDescriptionChange}/>
                        </div>
                    </div>
                    <h3 className="product-form-sub-title">
                        Agregar atributos
                    </h3>
                    <ul className="toppings-list">
                        {features.map(({ name, id }, index) => {
                            return (
                                <li key={id}>
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={name}
                                                value={name}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <h3 className="product-form-sub-title">
                        Políticas del producto
                    </h3>
                    <div className="product-form-policy-container">
                        <div className="product-form-policy-sub-container">
                            <h5 className="product-form-policy-title">
                                Normas de la casa
                            </h5>
                            <label className="product-form-label">
                                Descripción
                            </label>
                            <textarea rows={6} className="product-text-area" onChange={handleRulesChange}/>
                        </div>
                        <div className="product-form-policy-sub-container">
                            <h5 className="product-form-policy-title">
                                Salud y seguridad
                            </h5>
                            <label className="product-form-label">
                                Descripción
                            </label>
                            <textarea rows={6} className="product-text-area" onChange={handleSecurityChange}/>
                        </div>
                        <div className="product-form-policy-sub-container">
                            <h5 className="product-form-policy-title">
                                Política de cancelación
                            </h5>
                            <label className="product-form-label">
                                Descripción
                            </label>
                            <textarea rows={6} className="product-text-area" onChange={handlePolicyChange}/>
                        </div>
                    </div>


                    <h3 className="product-form-sub-title">
                        Cargar imágenes
                    </h3>

                </div>


            <Footer />
        </div>
    );
}

export default Administration;