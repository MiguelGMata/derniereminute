import React from 'react';       
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { DataDestinations } from '../destintioncard/Destinations';
import './clubsCard.css'; 

const ClubsCard = () => {
    const Clubs = DataDestinations.flatMap((hotel) => hotel.destinations);
    const navigate = useNavigate(); // Instancia de useNavigate

    // Filtrar para solo mostrar los hoteles que tengan el tipo "Club"
    const filteredClubs = Clubs.filter((club) => club.type === "Club");

    const handleClick = (id) => {
        navigate(`/destinations/sejour/${id}`); 
    };

    return (
        <div className="clubs-container">
            {filteredClubs.map((club) => (
                <div key={club.id} className="club-card">
                    <img src={club.image} alt={club.name} className="club-image" />
                    <div className="club-info">
                        <h3 className="club-name">{club.name}</h3>
                        <div className="club-stars">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} color={i < club.stars ? '#ffc107' : '#e4e5e9'} />
                            ))}
                        </div>
                        <p className="club-location"><FaMapMarkerAlt className="club-location-icon" /> {club.location}</p>
                        <p className="club-description">{club.description}</p>
                        <h3 className='club-price'>{club.price}€</h3>
                    </div>
                    <div className="div-button">
                        <button  onClick={() => handleClick(club.id)} className="discover-button">Découvrir</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClubsCard;

