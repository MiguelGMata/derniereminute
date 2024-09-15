import React from 'react';
import Search from '../../molecules/search/Search';
import './headerMultiple.css';

const HeaderMultiple = () => {
  return (
    <header className="header-offers">
      <div className="header-offers-text">
        <Search/>
      </div>
      <div className="header-offers-images">
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/mallorca-1.png?updatedAt=1726395884335" alt="Majorque" />
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/santorini-1.jpg?updatedAt=1726395884168" alt="Santorini" />
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/ibiza-1.jpg?updatedAt=1726395884215" alt="Ibiza" />
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/gran-canaria-1.jpg?updatedAt=1726395884235" alt="Grande Canarie" />
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/puerto-rico-1.jpg?updatedAt=1726395884231" alt="Puerto Rico" />
        <img src="https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/corse-1.jpg?updatedAt=1726420022963" alt="Corse" />
      </div>
    </header>
  );
};

export default HeaderMultiple;









