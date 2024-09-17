import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import './hotelDetails.css';

const HotelDetails = ({ hotels }) => {
  
  const { hotelId } = useParams();
  const hotel = [hotels].find(h => h.id === parseInt(hotelId));
  
  if (!hotel) {
    return <div></div>;
  }

  return (
    <div className="hotel-details">
      <h2>{hotel.name}</h2>
      <p className="location"><FaMapMarkerAlt  className="search-icon" />{hotel.location}</p>
      <img className="main-image" src={hotel.image} alt={hotel.name} />
      <div className="div-image-gallery">
        <ul className="image-gallery">
            {hotel.images.map((img, index) => (
            <li className="hotel-features" key={index}>
                <img src={img} alt={`${hotel.name} - ${index + 1}`} />
            </li>
            ))}
        </ul>
      </div>

      {/* Precio y Estrellas */}
      <p className="hotel-price">Prix : {hotel.price}€</p>
      <div className="hotel-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < hotel.stars ? '#ffc107' : '#e4e5e9'} />
        ))}
      </div>

      <div className="hotel-description-card">
        <p>Description : {hotel.description}</p>
      </div>
    </div>
  );
};

export default HotelDetails;


