import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";


function Gallery() {
    //update Gallery that gets name and desc from object
    const currentCategory = {
        name: "commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",   
    };
  return (
      //use helper function to capitaliza first letter iin name when rendered afrer importing helpler file
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{capitalizeFirstLetter(currentCategory.name)}</p>
      <div>
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;