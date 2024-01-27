import React, { useState } from 'react';
import './recommend.css';

function Recommend() {
  const images = [
    "https://images.pexels.com/photos/15587225/pexels-photo-15587225/free-photo-of-low-angle-shot-of-woman-wearing-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className='recom'>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt={`slide-${currentImage}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Recommend;
