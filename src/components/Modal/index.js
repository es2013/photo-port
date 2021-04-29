import React from 'react';

//destructure props into currentPhoto in the modal parameter
const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, index  } = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name} </h3>
          <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
          <p>
            {description}
          </p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;