"use client"; 

// components/Collage.js
import Image from 'next/image';
import "../globals.css";
import React, { useState } from 'react';

const Grid = ({ images }) => {
  return (
  <div class="grid-collages">
  <div className="grid">
    <div className="collages">
      {images.map((image, index) => (
        <div key={index} className={`picture picture-${index}`}>
          <Image src={image} width={200} height={200} />
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

export default Grid;
