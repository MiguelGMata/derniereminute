import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaBed, FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fr } from 'date-fns/locale'; // Localización en francés
import { format } from 'date-fns'; // Formateo de fecha
import HotelCard from '../hotelCard/HotelCard';
import {  DataDestinations} from '../destintioncard/Destinations';
import './search.css';

const hotels = DataDestinations;

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
      const filtered = hotels.filter((hotel) => hotel.country === location);
      setFilteredHotels(filtered);
    }
  };
  return (
    <div className='search'>
      <div className="search-container">
        <div className="search-item" onClick={handleLocationClick} ref={locationRef}>
          <FaMapMarkerAlt className="search-icon" />
          <span className='search-response'>{location}</span>
          {showLocationMenu && (
            <div className="search-dropdown">
              <button onClick={() => handleLocationSelect('Espagne')}>Espagne</button>
              <button onClick={() => handleLocationSelect('France')}>France</button>
              <button onClick={() => handleLocationSelect('Grèce')}>Grèce</button>
              <button onClick={() => handleLocationSelect('Maroc')}>Maroc</button>
              <button onClick={() => handleLocationSelect('Porto Rico')}>Porto Rico</button>
              <button onClick={() => handleLocationSelect('Venezuela')}>Venezuela</button>
            </div>
          )}
        </div>
        <div className="search-item" onClick={handleDateClick} ref={datePickerRef}>
          <FaCalendarAlt className="search-icon" />
          <span className='search-response'>{date ? format(date, 'dd MM yyyy', { locale: fr }) : 'Date'}</span>
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
          <span className='search-response'>{nights}</span>
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
          <FaSearch className="search-icon icon-white" />
          Rechercher
        </button>
      </div>

      <div className="search-hotels-list">
            {filteredHotels.length > 0 ? (
            filteredHotels.map((hotelFilter) => (
              <div key={hotelFilter.id}>
                {/* Segundo map dentro de hotelFilter sobre destinations */}
                {hotelFilter.destinations && hotelFilter.destinations.length > 0 ? (
                  <div>
                    {hotelFilter.destinations.map((hotel, index) => (
                      <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                ) : (
                  <p>No destinations available</p>
                )}
              </div>
            ))
            ) : (
              <p>Aucun hôtel disponible pour cette destination.</p>
            )}
      </div>
    </div>
  );
};

export default Search;
