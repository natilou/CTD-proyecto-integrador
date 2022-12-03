import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./Administration.css";
import PictureInput from "../../components/PictureInput";


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
    const [isLoading, setIsLoading] = useState(true);
    const [features, setFeatures] = useState([]);

    console.log({ features });


    
    const showLogin = true;
    const showLogout = true;
    const showLine = true;

    useEffect(() => {
        getFeatures();
    }, []);


    async function getFeatures() {
        setIsLoading(true);
        try {
            setIsLoading(true);
            await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/features')
                .then((response) => response.json())
                .then((data) =>
                setFeatures(data));
                setIsLoading(false);
        } catch (error) {
            console.log({ error });
            setIsLoading(false);
        }
    }

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
        <>
        {
            !isLoading ? (
                <div>
                    <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
                    <div className="admin-block-header">
                        <div className="admin-block-header-titles">
                            <h3 className="title">Administración</h3>
                        </div>
                        <div className="icon_back">
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
                    <div style={{ display : "flex", justifyContent: "center" }}>
                    <ul className="product-form-checkbox-container">
                        {features.map(({ name, id }, index) => {
                            return (
                                <li key={id} className="product-form-checkbox-sub-container">
                                    <input
                                        onChange={(e) => handleChange(e)}
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        className="product-form-checkbox"
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`} className="product-form-checkbox-label">{name}</label>
                                </li>
                            );
                        })}
                    </ul>

                    </div>

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
                    <div style={{ marginBottom: 300, display: 'flex', justifyContent: 'center' }}>
                        <PictureInput />

                    </div>

                </div>


            <Footer />
        </div>
            ) : (
            <div style={{ width: '90%',  height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span className="loading-spa">Loading...</span>
            </div>
            )
        }
        </>
    );
}

export default Administration;