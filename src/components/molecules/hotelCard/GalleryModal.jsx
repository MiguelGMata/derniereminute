import React, { useState } from 'react';
import './galleryModal.css'; // Asegúrate de crear un archivo CSS para los estilos

const GalleryModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-modal">
      <div className="gallery-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="modal-image" />
        <button className="prev" onClick={handlePrev}>❮</button>
        <button className="next" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default GalleryModal;
