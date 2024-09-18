import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Reservation.css';

const Reservation = () => {
  const location = useLocation(); //usa useLocation para obtener la data:
  const hotel = location.state?.hotel; // Obtén el hotel desde el estado

  const [date, setDate] = useState('');
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(1);

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNightsChange = (e) => {
    setNights(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleReservation = () => {
    // Lógica de reserva aquí
    setConfirmationMessage(`Réservation confirmée pour ${guests} personne(es) par ${nights} nuit(s) à partir de ${date}`);
    console.log('Reserva confirmada:', { date, nights, guests });
  };

  const handleCloseMessage = () => {
    setConfirmationMessage('');
  };

  if (!hotel) {
    return <div>Erreur: pas de détails d'hôtel disponibles</div>;
  }

  return (
    <div className="reservation">
      <div className="reservation-container">
        <h2 className="reservation-title">Réserver votre séjour à</h2>
        <h2 className="reservation-title">{hotel.name}</h2>
        <p className="hotel-location">{hotel.location}</p>
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <p className="hotel-price">Prix : {hotel.price}€ par nuit</p>
      </div>

      <div className="reservation-container">
        <h2 className="reservation-title">Réserver votre séjour</h2>

        <label className="reservation-label">Date d'arrivée</label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="reservation-input"
        />

        <label className="reservation-label">Nuits</label>
        <input
          type="number"
          min="1"
          value={nights}
          onChange={handleNightsChange}
          className="reservation-input"
        />

        <label className="reservation-label">Nombre de personnes</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={handleGuestsChange}
          className="reservation-input"
        />

        <button className="reservation-button" onClick={handleReservation}>
          Payer
        </button>
        
      {/* Mostrar el mensaje de confirmación */}
      {confirmationMessage && (
        <div className="confirmation-message">
          <button className="close-button" onClick={handleCloseMessage}>×</button>
          {confirmationMessage}
        </div>
      )}

      </div>
    </div>
  );
};

export default Reservation;
