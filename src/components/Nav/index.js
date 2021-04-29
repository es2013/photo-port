// import React from "react";
// import React, { useState }from "react";
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


  //initialize the category state
  function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      contactSelected,
      setContactSelected
    } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
      // eslint-disable-next-line 
    }, [currentCategory]);
    
    return (
      <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* when About is selected, contactSelected is set to false and the About component is rendered */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    );
  }  

  //previous lesson
//   const  categories = [
//     { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
//     { name: 'portraits', description: 'Portraits of people in my life' },
//     { name: 'food', description: 'Delicious delicacies' },
//     { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
//   ];

//   const handleClick = (item) => {
//     console.log(item);
//     return item;
//   };

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera"> 📸</span> Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
//               About me
//             </a>
//           </li>
//           <li className={"mx-2"}>
//             <span onClick={() => handleClick('Contact')}>
//               Contact
//             </span>
//           </li>
//           {
//             categories.map((category) => (
//               <li className="mx-1" key={category.name} >
//                 <span onClick={() => { handleClick(category.name); }}>
//                  {capitalizeFirstLetter(category.name)}
//                 </span>
//               </li>
//             ))
//           }
//         </ul>
//       </nav>
//     </header>
//   );
// }

export default Nav;