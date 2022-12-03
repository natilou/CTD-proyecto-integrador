import React, { useState } from "react";

import "./PictureInput.css";

function PictureInput() {
  const [images, setImages] = useState([]);

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

    console.log(newImagesState);
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
    console.log(newImages);
    setImages(newImages);
  }

  return (
    <div className="picture-input-container">
      <br></br>

      <label className="picture-input-label">
        <span>Seleccionar archivos </span>
        <input hidden type="file" multiple accept="image/png, image/jpeg"  onChange={onInputChange}></input>
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
    </div>
  );
}

export default PictureInput;