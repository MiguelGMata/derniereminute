import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './carousel.css';

const images = [
  {
    original: "https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/mallorca-1.png?updatedAt=1726395884335",
    link: "https://www.fr.lastminute.com/"
  },
  {
    original: "https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/santorini-1.jpg?updatedAt=1726395884168",
    link: "https://www.fr.lastminute.com/"
  },
  {
    original: "https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/ibiza-1.jpg?updatedAt=1726395884215",
    link: "https://www.fr.lastminute.com/"
  },
  {
    original: "https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/gran-canaria-1.jpg?updatedAt=1726395884235",
    link: "https://www.fr.lastminute.com/"
  },
  {
    original: "https://ik.imagekit.io/logoMGM/Derni%C3%A8reMinute/puerto-rico-1.jpg?updatedAt=1726395884231",
    link: "https://www.fr.lastminute.com/"
  },
];

const Carousel = () => {

  const renderItem = (item) => {
    // Accede al objeto de la imagen actual
    const { original, link } = item;
    
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={original} alt="" />
      </a>
    );
  };

  return (
    <div className='custom-projet-block'>
      <div className='custom-gallery-wrapper'>
      <ImageGallery
          items={images}
          renderItem={renderItem} // Personaliza el renderizado de las imágenes
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={true}
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
        />
      </div>
    </div>
  );
}

export default Carousel;