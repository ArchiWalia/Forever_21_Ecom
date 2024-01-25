import React, { useState, useEffect } from 'react';
import './hero.css'
const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://s7ap1.scene7.com/is/content/adityabirlafashion/F21_Winterwear_HB4_D?resMode=sharp2&wid=1440&hei=597',
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/F21_Denim_HB1_D?resMode=sharp2&wid=1440&hei=597',
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/F21_Partywear_HB3_D?resMode=sharp2&wid=1440&hei=597',
    'https://s7ap1.scene7.com/is/image/adityabirlafashion/F21_Menswear_HB2_D?resMode=sharp2&wid=1440&hei=597'
  ];

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Automatically change the image every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <>
    <div className="hero-section">
      <img src={images[imageIndex]} alt={`Hero Image ${imageIndex + 1}`} className="hero-image" />
      <button onClick={handlePrevImage}>Previous Image</button>
      <button onClick={handleNextImage}>Next Image</button>
    </div>
    <div className='banner'>
      <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/F21_Stripe_banner_D?resMode=sharp2&wid=1440&hei=252" alt="banner" />
    </div>
    </>
  );
};

export default Hero;
