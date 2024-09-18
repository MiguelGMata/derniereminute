import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { DataDestinations } from '../destintioncard/Destinations';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './cardOffert.css';

const CardOffert = () => {
  const [currentIndexes, setCurrentIndexes] = useState({});
  const navigate = useNavigate(); // Instancia de useNavigate
  
  // Aplanar el array de destinos en un solo array de hoteles
  const Destinations = DataDestinations.flatMap((hotels) => hotels.destinations);
  const offers = Destinations;

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

  const handleClick = (id) => {
    navigate(`/destinations/sejour/${id}`); 
  };

  // Limitar la cantidad de hoteles mostrados a 8
  const limitedOffers = offers.slice(0, 8);

  return (
    <div className="card-offert-container">
      {limitedOffers.map((offer) => (
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
            <h3>{offer.name}</h3>
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                            <FaStar key={i} color={i < offer.stars ? '#ffc107' : '#e4e5e9'} />
                ))}
            </div>
            <p>{offer.description}</p>
            <div className="price"><span className="price-note">Dès</span> {offer.price}€</div>
            <button className="hotel-card-discover-button" onClick={() => handleClick(offer.id)}>Découvrir</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardOffert;
