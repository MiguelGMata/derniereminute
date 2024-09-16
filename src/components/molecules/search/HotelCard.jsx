import React, { useState } from 'react';
import { FaHeart, FaStar, FaCheckCircle, FaClock } from 'react-icons/fa';
import './HotelCard.css'; // Asegúrate de tener los estilos

const HotelCard = ({ hotel }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div className="hotel-card">
      {/* Primera columna - Imagen */}
      <div className="hotel-image">
        <img src={hotel.image} alt={hotel.name} />
      </div>

      {/* Segunda columna - Información */}
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <div className="hotel-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < hotel.stars ? '#ffc107' : '#e4e5e9'} />
          ))}
        </div>
        <p>{hotel.location}</p>
        <ul className="hotel-features">
            {hotel.features.map((feature, index) => (
            <li key={index}>{feature}</li>
            ))}
        </ul>
        <div className="hotel-icons">
          <span className="all-inclusive"><FaCheckCircle className="icon" /> Tout compris</span>
          <span className="durations"><FaClock className="icon" /> Durées Disponibles</span>
        </div>
      </div>

      {/* Tercera columna - Like, Precio y Botón */}
      <div className="hotel-actions">
        <FaHeart
          className={`heart-icon ${liked ? 'liked' : ''}`}
          onClick={toggleLike}
        />
        <div className="hotel-price">{hotel.price}€</div>
        <button className="discover-button">Découvrir</button>
      </div>
    </div>
  );
};

export default HotelCard;
