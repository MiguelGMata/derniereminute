import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Data } from './Data';
import './cardOffert.css';

const CardOffert = () => {
  const [currentIndexes, setCurrentIndexes] = useState({});
  const offers = Data

  const handlePrevClick = (offerId) => {
    setCurrentIndexes((prevIndexes) => {
      const currentIndex = prevIndexes[offerId] || 0;
      return {
        ...prevIndexes,
        [offerId]: currentIndex === 0 ? offers.find(o => o.id === offerId).images.length - 1 : currentIndex - 1
      };
    });
  };

  const handleNextClick = (offerId) => {
    setCurrentIndexes((prevIndexes) => {
      const currentIndex = prevIndexes[offerId] || 0;
      return {
        ...prevIndexes,
        [offerId]: currentIndex === offers.find(o => o.id === offerId).images.length - 1 ? 0 : currentIndex + 1
      };
    });
  };

  return (
    <div className="card-offert-container">
      {offers.map((offer) => (
        <div key={offer.id} className="card-offert">
          <div className="carousel">
            <button
              className="carousel-button prev"
              onClick={() => handlePrevClick(offer.id)}
            >
              <FaArrowLeft />
            </button>
            <div className="carousel-content">
              <img src={offer.images[currentIndexes[offer.id] || 0]} alt={`Image ${currentIndexes[offer.id] || 0 + 1}`} />
              <div className="location-overlay">
                <FaMapMarkerAlt className="location-icon" />
                <span>{offer.location}</span>
              </div>
            </div>
            <button
              className="carousel-button next"
              onClick={() => handleNextClick(offer.id)}
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="card-info">
            <h3>{offer.hotel}</h3>
            <div className="stars">
              {Array(offer.stars)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
            </div>
            <p>{offer.description}</p>
            <div className="price">{offer.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOffert;
