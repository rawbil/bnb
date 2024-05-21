"use client";

import React, { useState } from 'react';
import '../globals.css';
import Grid from '@/app/ui/grid';

interface CollageProps {
  name: string;
  images: string[];
}

const CustomCarousel: React.FC<CollageProps> = ({ images, name }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  const handleIconClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent div
    setShowComponent(false); // Hide the component
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };
  
  return (
    <div>
      <h1>{name}</h1>
      <div onClick={handleClick} className="carousel">
        <button className="navButton" onClick={goToPrevSlide}>
          &lt;
        </button>
        <div className="slideContainer">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="navButton" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      {showComponent && (
        <div className="tog">
          <span className="togg" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
            Back {name}
          </span>
          <Grid images={images} />
        </div>
      )}
      <span className="togg-b" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
        Back
      </span>
    </div>
  );
};

export default CustomCarousel;
