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
    <div class="card" className="bg-white rounded-lg overflow-hidden shadow-md">
      <a href={hrefLink} target="blank">
      {imageUrl && (
        <img className="w-full h-40 object-cover" src={imageUrl} alt={county} />
      )}
      <div class="desc" className="">
        <h2>{county}</h2><p class="tit"><i><GoStarFill /></i>{rate}</p>
        <p class="p">{region}</p>
        <p class="p">{specific}</p>
        <p class="price">{price}<span>night</span></p>
      </div>
      </a>
    </div>
  );
};

export default Card;
