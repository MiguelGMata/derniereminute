import React from 'react';
import './cardDestinations.css';

const destinations = [
  { id: 1, title: 'Majorque', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/mallorca-1.png?updatedAt=1726395884335' },
  { id: 2, title: 'Santorini', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/santorini-1.jpg?updatedAt=1726395884168' },
  { id: 3, title: 'Ibiza', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/ibiza-1.jpg?updatedAt=1726395884215' },
  { id: 4, title: 'Grande Canarie', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/gran-canaria-1.jpg?updatedAt=1726395884235' },
  { id: 5, title: 'Puerto Rico', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/puerto-rico-1.jpg?updatedAt=1726395884231' },
  { id: 6, title: 'Corse', imageUrl: 'https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/corse-1.jpg?updatedAt=1726420022963' }
];

const CardDestinations = () => {
  return (
    <div className="card-destinations-grid">
      {destinations.map((destination) => (
        <div key={destination.id} className="destination-card">
          <img src={destination.imageUrl} alt={destination.title} className="destination-image" />
          <div className="destination-title">{destination.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CardDestinations;
