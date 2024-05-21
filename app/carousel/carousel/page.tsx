"use client";

import React,  { useState } from 'react';
import CustomCarousel from '@/app/ui/carousel';

const YourPage = () => {
  const images = [
    'https://via.placeholder.com/300',
    '/logo.jpg',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    '/logo.jpg',
    'https://via.placeholder.com/300',
    '/logo.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div>
      <CustomCarousel images={images} />
    </div>
  );
};

export default YourPage;
