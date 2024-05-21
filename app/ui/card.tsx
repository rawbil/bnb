"use client";

// components/Card.tsx
import "../globals.css";
import { GoStarFill } from "react-icons/go";

import React,  { useState } from 'react';
import CustomCarousel from '@/app/ui/carousel';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ county, hrefLink, specific, region, price, rate, description, imageUrl }) => {
  return (
    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
      <a href={hrefLink} target="blank">
      {imageUrl && (
        <img className="w-full h-40 object-cover" src={imageUrl} alt={county} />
      )}
      <div className="desc">
        <h2>{county}</h2><p className="tit"><i><GoStarFill /></i>{rate}</p>
        <p className="p">{region}</p>
        <p className="p">{specific}</p>
        <p className="price">{price}<span>night</span></p>
      </div>
      </a>
    </div>
  );
};

export default Card;
