import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaBed, FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fr } from 'date-fns/locale'; // Localización en francés
import { format } from 'date-fns'; // Formateo de fecha
import HotelCard from './HotelCard';
import './search.css';

// Datos de hoteles de ejemplo
const hotels = [
  {
    id: 1,
    name: 'Hotel Majorque',
    location: 'Majorque',
    stars: 4,
    price: 120,
    features: [
      'Un emplacement privilégié en bord de mer',
      'Des chambres spacieuses avec un coin salon séparé, idéales pour les familles',
      'Un hôtel moderne familial',
    ],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Hotel Grèce',
    location: 'Grèce',
    stars: 5,
    price: 200,
    features: [
      'Une vue imprenable sur la mer Égée',
      'Des suites de luxe avec balcon privé',
      'Un spa complet et piscine à débordement',
    ],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Hotel Canaries',
    location: 'Canaries',
    stars: 4,
    price: 150,
    features: [
      'Un accès direct à la plage',
      'Des chambres familiales avec kitchenette',
      'Un programme d’activités pour tous les âges',
    ],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Hotel Ibiza',
    location: 'Ibiza',
    stars: 3,
    price: 180,
    features: [
      'Situé au cœur de la vie nocturne',
      'Des chambres avec vue sur la mer',
      'Un rooftop avec piscine et bar',
    ],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Hotel Puerto Rico',
    location: 'Puerto Rico',
    stars: 5,
    price: 220,
    features: [
      'Un resort all inclusive',
      'Des villas privées avec piscine',
      'Un accès à une plage privée',
    ],
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Hotel Corse',
    location: 'Corse',
    stars: 4,
    price: 160,
    features: [
      'Un cadre naturel exceptionnel',
      'Des activités de plein air pour toute la famille',
      'Un restaurant gastronomique avec vue panoramique',
    ],
    image: 'https://via.placeholder.com/150',
  },
];

const Search = () => {
  const [location, setLocation] = useState('Lieu');
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [date, setDate] = useState(null);
  const [nights, setNights] = useState('0 à 5 nuits');
  const [showNightsMenu, setShowNightsMenu] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const datePickerRef = useRef(null);
  const locationRef = useRef(null);
  const nightsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target) &&
        locationRef.current &&
        !locationRef.current.contains(event.target) &&
        nightsRef.current &&
        !nightsRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
        setShowLocationMenu(false);
        setShowNightsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationClick = () => setShowLocationMenu(!showLocationMenu);
  const handleDateClick = () => setShowDatePicker(true);
  const handleNightsClick = () => setShowNightsMenu(!showNightsMenu);

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setShowLocationMenu(false);
  };

  const handleDateChange = (date) => {
    setDate(date);
    setShowDatePicker(false);
  };

  const handleNightsSelect = (night) => {
    setNights(night);
    setShowNightsMenu(false);
  };

  const handleSearch = () => {
    if (location === 'Lieu') {
      setFilteredHotels(hotels); // Si no se selecciona ubicación, muestra todos los hoteles
    } else {
      const filtered = hotels.filter((hotel) => hotel.location === location);
      setFilteredHotels(filtered);
    }
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-item" onClick={handleLocationClick} ref={locationRef}>
          <FaMapMarkerAlt className="search-icon" />
          <span>{location}</span>
          {showLocationMenu && (
            <div className="search-dropdown">
              <button onClick={() => handleLocationSelect('Majorque')}>Majorque</button>
              <button onClick={() => handleLocationSelect('Grèce')}>Grèce</button>
              <button onClick={() => handleLocationSelect('Canaries')}>Canaries</button>
              <button onClick={() => handleLocationSelect('Ibiza')}>Ibiza</button>
              <button onClick={() => handleLocationSelect('Puerto Rico')}>Puerto Rico</button>
              <button onClick={() => handleLocationSelect('Corse')}>Corse</button>
            </div>
          )}
        </div>
        <div className="search-item" onClick={handleDateClick} ref={datePickerRef}>
          <FaCalendarAlt className="search-icon" />
          <span>{date ? format(date, 'dd MM yyyy', { locale: fr }) : 'Date'}</span>
          {showDatePicker && (
            <div className="date-picker-container">
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                className="search-date-picker"
                dateFormat="dd/MM/yyyy"
                placeholderText="Sélectionnez une date"
                locale={fr} // Establece la localización en francés
              />
            </div>
          )}
        </div>
        <div className="search-item" onClick={handleNightsClick} ref={nightsRef}>
          <FaBed className="search-icon" />
          <span>{nights}</span>
          {showNightsMenu && (
            <div className="search-dropdown">
              <button onClick={() => handleNightsSelect('1 nuit')}>1 nuit</button>
              <button onClick={() => handleNightsSelect('2 nuits')}>2 nuits</button>
              <button onClick={() => handleNightsSelect('3 nuits')}>3 nuits</button>
              <button onClick={() => handleNightsSelect('4 nuits')}>4 nuits</button>
              <button onClick={() => handleNightsSelect('5 nuits')}>5 nuits</button>
            </div>
          )}
        </div>
        <button className="search-button" onClick={handleSearch}>
          <FaSearch className="search-icon" />
          Rechercher
        </button>
      </div>

      <div className="search-hotels-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
        ) : (
          <p>Aucun hôtel disponible pour cette destination.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
