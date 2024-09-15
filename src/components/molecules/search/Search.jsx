import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaBed, FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fr } from 'date-fns/locale'; // Importa la localización en francés
import { format } from 'date-fns'; // Importa la función de formato
import './Search.css';

const Search = () => {
  const [location, setLocation] = useState('Lieu');
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [date, setDate] = useState(null);
  const [nights, setNights] = useState('0 à 5 nuits');
  const [showNightsMenu, setShowNightsMenu] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  return (
    <div className="search-container">
      <div className="search-item" onClick={handleLocationClick} ref={locationRef}>
        <FaMapMarkerAlt className="search-icon" />
        <span>{location}</span>
        {showLocationMenu && (
          <div className="search-dropdown">
            <button onClick={() => handleLocationSelect('Paris')}>Paris</button>
            <button onClick={() => handleLocationSelect('Londres')}>Londres</button>
            <button onClick={() => handleLocationSelect('New York')}>New York</button>
            {/* Añade más opciones según sea necesario */}
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
              onClick={(e) => e.stopPropagation()} // Prevents DatePicker from closing
              locale={fr} // Set locale to French
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
            {/* Añade más opciones según sea necesario */}
          </div>
        )}
      </div>
      <button className="search-button">
        <FaSearch className="search-icon" />
        Rechercher
      </button>
    </div>
  );
};

export default Search;



