import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataDestinations } from '../destintioncard/Destinations';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import './destinationDetails.css'; // Asegúrate de tener estilos adecuados

const DestinationsDetails = () => {
  const { id } = useParams(); // Recupera el ID de la URL
  const destination = DataDestinations.find(dest => dest.id === parseInt(id)); // Encuentra la destinación por ID
  const navigate = useNavigate(); // Instancia de useNavigate
  
  const handleDiscoverClick = (id) => {
    navigate(`/destinations/sejour/${id}`); // Redirige al componente de detalles usando destination.id
  };
  if (!destination) {
    return <div>Destinación no encontrada</div>;
  }

  return (
    <div className="dest-details-container">
      {/* Título del país */}
      <h1 className="dest-title">{destination.country}</h1>

      {/* Imagen principal */}
      <img
        src={destination.locationImage}
        alt={destination.country}
        className="dest-main-image"
      />

      {/* Descripción del país */}
      <div className="dest-description-container">
        <p>{destination.description}</p>
      </div>

      {/* Galería de imágenes y detalles de hoteles */}
      {destination.destinations && destination.destinations.length > 0 && (
        <div className="hotels-gallery-wrapper">
          {destination.destinations.map((hotel) => (
            <div key={hotel.id} className="hotel-card-wrapper">
              {/* Nombre del hotel */}
              <h2 className="hotel-card-title">{hotel.name}</h2>
              <h3 className="hotel-card-location"><FaMapMarkerAlt /> {hotel.location}</h3>
              {/* Imagen del hotel */}
              <img src={hotel.image} alt={hotel.name} className="hotel-card-image" />

              {/* Precio y estrellas */}
              <p className="hotel-card-price"><strong>Prix:</strong> {hotel.price}€</p>
              <div className="hotel-card-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color={i < hotel.stars ? '#ffc107' : '#e4e5e9'} className="hotel-star-icon" />
                ))}
              </div>

              {/* Lista de características del hotel */}
              <ul className="hotel-card-features-list">
                {hotel.features.map((feature, index) => (
                  <li key={index} className="hotel-card-feature-item">- {feature}.</li>
                ))}
              </ul>

              {/* Botón descubrir */}
              <button className="hotel-card-discover-button"  onClick={() => handleDiscoverClick(hotel.id)}>
                Découvrir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationsDetails;



