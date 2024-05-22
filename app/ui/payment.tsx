"use client";

import "../globals.css";
import React, { useState } from 'react';
import ErrorMessage from '@/app/ui/errorMessage';

interface CardProps {
  price: string;
  description: string;
}

const Payment: React.FC<CardProps> = ({ price, description }) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'info' | 'warning' | 'error'>('info');
  const [key, setKey] = useState(0);

  const handleError = (type: 'info' | 'warning' | 'error') => {
    setMessage('Online reservation is not available at the moment! Please contact +254115 425 094 on WhatsApp to complete your room reservation. Thank you');
    setType(type);
    setKey(prevKey => prevKey + 1); // Update key to force re-render
  };

  return (
    <div className="check-rt">
      <div className="check">
        <p>{price}<span>night</span></p>
        <form action="" className="grid grid-cols-2 grid-rows-2">
          <div className="date col-span-1 row-span-1">
            <label>Check-in</label>
            <input type="date" name="" value="2024-08-05" id="" />
          </div>
          <div className="date col-span-1 row-span-1">
            <label>Checkout</label>
            <input type="date" name="" value="2024-08-11" id="" />
          </div>
          <div className="col-span-2 row-span-1">
            <label>Guests</label>
            <input type="text" value="1 Guest" />
          </div>
        </form>
        <span>Those dates are not available</span>
        <button onClick={() => handleError('info')}>Check reservation</button>
      </div>
      <div className="story">
        {description}
      </div>
      <ErrorMessage key={key} message={message} type={type} />
    </div>
  );
};

export default Payment;
