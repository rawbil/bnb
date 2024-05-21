"use client";

// components/Card.tsx
import "../globals.css";

import React,  { useState } from 'react';
import CustomCarousel from '@/app/ui/carousel';

interface CardProps {
  guests: string;
  bedroom: string;
  bed: string;
  bath: string;
}

const Assets: React.FC<CardProps> = ({ guests, bedroom, bed, bath }) => {
  return (
    <>
    <ul className="assets">
        <li>{guests} guests</li>
        <li>{bedroom} bedroom</li>
        <li>{bed} beds</li>
        <li>{bath} bath</li>
      </ul>
    </>
  );
};

export default Assets;
