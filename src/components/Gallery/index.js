import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

// import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

// function Gallery() {
//     //update Gallery that gets name and desc from object
//     const currentCategory = {
//         name: "commercial",
//         description:
//           "Photos of grocery stores, food trucks, and other commercial projects",   
//     };
//   return (
//       //use helper function to capitaliza first letter iin name when rendered afrer importing helpler file
//     <section>
//       <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
//       <p>{capitalizeFirstLetter(currentCategory.name)}</p>
//       <PhotoList  />
//     </section>
//   );
// }
export default Gallery;