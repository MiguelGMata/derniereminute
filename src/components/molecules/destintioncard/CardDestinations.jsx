import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import {  DataDestinations} from '../destintioncard/Destinations';
import './cardDestinations.css';

const destinations = DataDestinations;

const CardDestinations = () => {
  const navigate = useNavigate(); // Instancia de useNavigate
  
  const handleDiscoverClick = (id) => {
    navigate(`/destinations/${id}`); // Redirige al componente de detalles usando destination.id
  };

  return (
    <div className="card-destinations-grid">
      {destinations.map((destination) => (
        <div key={destination.id} className="destination-card">
          <img src={destination.locationImage} alt={destination.title} className="destination-image" />
          <div className="destination-title">{destination.country}</div>
          <div 
            className="destination-btn" 
            onClick={() => handleDiscoverClick(destination.id)} // Pasa la función correctamente
          >
            Découvrir
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDestinations;

