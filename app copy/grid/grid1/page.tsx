import "@/app/globals.css";
import Grid from '@/app/ui/grid';
import React, { useState } from 'react';


const pictures = [
  { src: '/logo.jpg', alt: 'Image 1' },
  { src: '/logo.jpg', alt: 'Image 2' },
  { src: '/logo.jpg', alt: 'Image 3' },
  { src: '/logo.jpg', alt: 'Image 4' },
  { src: '/logo.jpg', alt: 'Image 5' },
  { src: '/logo.jpg', alt: 'Image 6' },
  { src: '/logo.jpg', alt: 'Image 7' },
  { src: '/logo.jpg', alt: 'Image 8' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  { src: '/logo.jpg', alt: 'Image 9' },
  // Add more images as needed
];

const HomePage = () => {
  return (
       //<h1>Family Beach House - right on the beach</h1>
       <Grid images={images} />
  );
};

export default HomePage;
