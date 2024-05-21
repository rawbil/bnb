"use client"; 

// components/Collage.tsx
import Image from 'next/image';
import "../globals.css";
import React from 'react';

interface GridProps {
  images: string[];
}

const Grid: React.FC<GridProps> = ({ images }) => {
  return (
    <div className="grid-collages">
      <div className="grid">
        <div className="collages">
          {images.map((image, index) => (
            <div key={index} className={`picture picture-${index}`}>
              <Image src={image} width={200} height={200} alt={`Collage image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
