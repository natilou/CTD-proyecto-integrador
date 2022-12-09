import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import "./Administration.css";
import PictureInput from "../../components/PictureInput";
import Swal from 'sweetalert2';
import Select from 'react-select';
import { Formik, Field } from 'formik';
import { validateNameRegex } from "./validateProduct";


function Administration() {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productAddress, setProductAddress] = useState("");
    const [productCity, setProductCity] = useState("");
    const [productRules, setProductRules] = useState("");
    const [productSecurity, setProductSecurity] = useState("");
    const [productCancelationPolicy, setProductCancelationPolicy] = useState("");
    const [productFeatures, setProductFeatures] = useState([]);
    const [productDescription, setProductDescription] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [features, setFeatures] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const jwt =  JSON.parse(localStorage.getItem("jwt"));
    const urlImages = "http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/images/upload";
    const urlProductCreation = "http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products";
    const header = {
        "Authorization": `${jwt.token}`,
        "content-type": "application/json",
        "accept": "application/json"
    }
    const showLogin = true;
    const showLogout = true;
    const showLine = true;
    let navigate = useNavigate();

    const listCategories = categories.map(category => (
        {
            value: category.id,
            label: category.title,
            obj: category,
        }
    ))

    const listCities = cities.map(city => (
        {
            value: city.id,
            label: city.name,
            obj: city,
        }
    ))

    useEffect(() => {
        getNecessaryData();
    }, []);

    async function postImages() {
        const images = new FormData();
        for (let i = 0 ; i < productImages.length ; i++) {
            images.append("files", productImages[i].file);
        }
       

        await fetch(urlImages,{
            method: "POST",
            body: images,
        }).then(response => response.json())
        .then(response => {
            if (response.length === productImages.length) {
                postProduct(response);
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Lamentablemente el producto no se creó. Por favor, intente más tarde',
                })
            }
        })
        .catch(error => console.log(error))
        
    }

    async function postProduct(imagesList) {
        const imagesToSend = imagesList.map((img, index) => ( 
            {
                title: index === 0 ? "portada" : "galería",
                url: img,
                product:{}
            }
        ))

        const productBody = {
            title: productName,
            categoryId: productCategory,
            address: productAddress,
            cityId: productCity,
            description: productDescription,
            coverImageUrl: imagesList[0],
            featuresId: productFeatures,
            policies: [
                {
                    description: productRules,
                    typeId: 8,
                },
                {
                    description: productSecurity,
                    typeId: 9,
                },
                {
                    description: productCancelationPolicy,
                    typeId: 7,
                }
            ],
            images: imagesToSend,
        }

        await fetch(urlProductCreation,{
            method: "POST",
            headers: header,
            body: JSON.stringify(productBody)
        })
        .then(response => response.json())
        .then(response => {
            if(response) {
                navigate("/successful-product-creation")
            } else {
                Swal.fire({
                icon: 'error',
                text: 'Lamentablemente el producto no se creó. Por favor, intente más tarde',
            })
            }
        })
        .catch(error => console.log(error))

    }

    async function handleButtonCreationClick() {
        if(productName === "" || productCategory==="" || productAddress === "" || productCity==="" || 
            productRules === "" || productSecurity=== ""|| productCancelationPolicy === "" || 
            productFeatures === [] || productDescription === ""){
                Swal.fire({
                  icon: 'error',
                  text: 'Todos los campos son obligatorios',
                })
        } else if (productCity === ""){
            Swal.fire({
                icon: 'error',
                text: 'Debes completar el campo de ciudad',
              })
        } else if (productCategory === ""){
            Swal.fire({
                icon: 'error',
                text: 'Debes completar el campo de categoría',
              })
        } else{
            await postImages();
        }
    }
      

    async function getNecessaryData() {
        setIsLoading(true);
        try {
            setIsLoading(true);
            await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/features')
                .then((response) => response.json())
                .then((data) =>
                setFeatures(data));
            await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories')
                .then((response) => response.json())
                .then((data) =>
                setCategories(data));
            await fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/cities')
                .then((response) => response.json())
                .then((data) =>
                setCities(data));
                setIsLoading(false);
        } catch (error) {
            console.log({ error });
            setIsLoading(false);
        }
    }



    function validateName(value) {

        let error;
        
        if (!value) {
        
        error = 'Debes completar el campo del nombre';
        
        } else if (value && validateNameRegex(value)){
            setProductName(value)
        } else if (!validateNameRegex(value)){
            error = "Nombre no válido"
        }
        return error;
        
        }
        
        function validateCategory(value) {
        
        let error;
        
        if (!value) {
        
        error = 'Debes completar el campo del categoria';
        
        } else {
        
        setProductCategory(value)
        
        }
        
        return error;
        
        }
        
        
        
        
        
        
        function validateAddress(value) {
        
        let error;
        
        if (!value) {
        
        error = 'Debes completar el campo de la direccion';
        
        } else {
        
        setProductAddress(value)
        
        }
        
        return error;
        
        
        
        }
        
              
        function validateDescription(value) {
            let error;
            if (!value) {
            error = 'Debes completar el campo de la description';
            } else {
            setProductDescription(value)
            }
            return error;
        }
        
        
        
        
        function validateRules(value) {
        
            let error;
            
            if (!value) {
            
            error = 'Debes completar el campo de las normas del lugar';
            
            } else {
            
            setProductRules(value)
            
            }
            
            return error;
        }
        
        function validatePolity(value) {
        
            let error;
            
            if (!value) {
            
            error = 'Debes completar el campo de las normas de politicas de cancelacion';
            
            } else {
            
            setProductCancelationPolicy(value)
            
            }
            
            return error;
        }
        
        
        
        
        function validateSecurity(value) {
            
            let error;
            
            if (!value) {
            
            error = 'Debes completar el campo de las normas de seguridad';
            
            } else {
            
            setProductSecurity(value)
            
            }
            
            return error;        
        }
        
    
    function handleChange(e) {  
        var isChecked = e.target.checked;  
        var item = e.target.value;

        if(isChecked) {
            let productFeaturesClone = [...productFeatures]
            productFeaturesClone.push(item);
            setProductFeatures(productFeaturesClone);
        }
        if(!isChecked) {
            let productFeaturesClone = [...productFeatures]
            let newFeatures = productFeaturesClone.filter(feature => feature !== item);
            setProductFeatures(newFeatures);
        }
  }

  function getProductImages(images) {
    setProductImages(images);
  }

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
        resolve(reader.result.split(',')[1]);
    };
    });
  };

    const base64Images = productImages.map(async img => {
        return {
            base: await blobToBase64(img.file)
        }}
    );

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
        
        <h3 className="product-form-title">
        
        Crear propiedad
        
        </h3>
        
        </div>
        
        <Formik
        
        initialValues={{
        
        name: '',
        
        category: '',
        
        address: '',
        
        description:'',
        
        rules: '',
        
        polity:'',
        
        security:'',
        
        }}
        
        >
        
        {({ errors, touched }) => (
        
        <div className="product-form-container">
        
        <div className="product-form-inputs-container">
        
        <div className="product-form-inputs-sub-container">
        
        <label className="product-form-label">
        
        Nombre
        
        </label>
        
        <Field type="text" name="name" className="product-input" validate={validateName} />
        
        {errors.name && touched.name ? (
        
        <div className="error-input-register">{errors.name}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        <div className="product-form-inputs-sub-container">
        
        <label htmlFor="category" className="product-form-label">
        
        Categoría
        
        </label>
        
        <Select
        
        name="category"
        
        className="product-input"
        
        placeholder={"Seleccionar"}
        
        isClearable={true}
        
        isSearchable={true}
        
        onChange={(category) => { validateCategory(category.value) }}
        
        options={listCategories}
        
        validate={validateCategory}
        
        />
        
        {errors.category && touched.category ? (
        
        <div className="error-input-register">{errors.category}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        </div>
        
        <div className="product-form-inputs-container">
        
        <div className="product-form-inputs-sub-container">
        
        <label className="product-form-label">
        
        Dirección
        
        </label>
        
        <Field type="text" name="address" className="product-input" validate={validateAddress} />
        
        {errors.address && touched.address ? (
        
        <div className="error-input-register">{errors.address}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        <div className="product-form-inputs-sub-container">
        
        <label className="product-form-label">
        
        Ciudad
        
        </label>
        
        <Select
        
        className="product-input"
        
        placeholder={"Seleccionar"}
        
        isClearable={true}
        
        isSearchable={true}
        
        onChange={(city) => { setProductCity(city.value) }}
        
        options={listCities}
        
        />
        
        </div>
        
        </div>
        
        <div className="product-form-description-container">
        
        <div className="product-form-description-sub-container">
        
        <label className="product-form-label">
        
        Descripción
        
        </label>
        
        <Field as="textarea" name="description" rows={6} className="product-text-area" validate={validateDescription} />
        
        {errors.description && touched.description ? (
        
        <div className="error-input-register">{errors.description}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        </div>
        
        <h3 className="product-form-sub-title">
        
        Agregar atributos
        
        </h3>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
        
        <ul className="product-form-checkbox-container">
        
        {features.map(({ name, id }, index) => {
        
        return (
        
        <li key={id} className="product-form-checkbox-sub-container">
        
        <input
        
        onChange={(e) => handleChange(e)}
        
        type="checkbox"
        
        id={`custom-checkbox-${index}`}
        
        name={name}
        
        value={id}
        
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
        
        <Field
        
        as='textarea'
        
        name='rules'
        
        rows={6}
        
        className="product-text-area"
        
        validate={validateRules} />
        
        {errors.rules && touched.rules ? (
        
        <div className="error-input-register">{errors.rules}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        <div className="product-form-policy-sub-container">
        
        <h5 className="product-form-policy-title">
        
        Salud y seguridad
        
        </h5>
        
        <label className="product-form-label">
        
        Descripción
        
        </label>
        
        <Field
        
        as='textarea'
        
        name='security'
        
        rows={6}
        
        className="product-text-area"
        
        validate={validateSecurity} />
        
        {errors.security && touched.security ? (
        
        <div className="error-input-register">{errors.security}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        <div className="product-form-policy-sub-container">
        
        <h5 className="product-form-policy-title">
        
        Política de cancelación
        
        </h5>
        
        <label className="product-form-label">
        
        Descripción
        
        </label>
        
        <Field
        
        as='textarea'
        
        name='polity'
        
        rows={6}
        
        className="product-text-area"
        
        validate={validatePolity} />
        
        {errors.polity && touched.polity ? (
        
        <div className="error-input-register">{errors.polity}</div>
        
        ) : <div className="error-input-register"></div>}
        
        </div>
        
        </div>
        
        
        
        
        
        <h3 className="product-form-sub-title">
        
        Cargar imágenes
        
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        <PictureInput getProductImages={getProductImages} />
        
        
        
        
        </div>
        
        
        
        
        </div>
        
        )}
        
        </Formik>
        
        <div className="product-form-submit-button-container">
        
        <button className="product-form-submit-button" onClick={handleButtonCreationClick}>
        
        Crear
        
        </button>
        
        </div>
        
        
        
        
        
        
        <Footer />
        
        </div>
        
        ) : (
        
        <div style={{ width: '90%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <span className="loading-spa">Loading...</span>
        
        </div>
        
        )
        
        }
        
        </>
        
        );
        
    }
        
export default Administration;
