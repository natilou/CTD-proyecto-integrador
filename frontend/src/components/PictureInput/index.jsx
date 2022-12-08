import React, { useState, useEffect } from "react";

import "./PictureInput.css";

function PictureInput({ getProductImages }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getProductImages(images);
}, [images]);

  const onInputChange = (e) => {
    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImagesToState = filesReader(e, indexImg);
    let newImagesState = [...images, ...newImagesToState];
    setImages(newImagesState);
  };

  function filesReader(e, initialIndex) {
    const files = e.currentTarget.files;
    const imagesObjet = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];

      let url = URL.createObjectURL(file);

      imagesObjet.push({
        index: initialIndex,
        name: file.name,
        url,
        file
      });

      initialIndex++;
    });
    return imagesObjet;
  }

  function deleteImg(index) {
    const newImages = images.filter(function (element) {
      return element.index !== index;
    });
    setImages(newImages);
  }

  return (
    <div className="picture-input-container">
      <br></br>

      <form id="form">

        <label className="picture-input-label">
          <span>Seleccionar archivos </span>
          <input hidden name="image" type="file" id="file" multiple accept="image/png, image/jpeg"  onChange={(e) => onInputChange(e)}></input>
        </label>

        <div className="picture-input-images-container">
          {
            images.map((img) => (
              <div key={img.index}>
                <div >
                  <button
                    onClick={deleteImg.bind(this, img.index)}
                    className="picture-input-delete-image-button"
                  >
                    x
                  </button>
                  <img
                    alt="algo"
                    src={img.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    className="img-responsive"
                  />
                </div>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}

export default PictureInput;