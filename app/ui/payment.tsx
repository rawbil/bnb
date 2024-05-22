"use client";

import "../globals.css";
import React, { useState } from 'react';
import ErrorMessage from '@/app/ui/errorMessage';

interface CardProps {
  price: string;
  description: string;
}

const Payment: React.FC<CardProps> = ({ price, description }) => {
  const [info, setError] = useState('');
  const [errorType, setErrorType] = useState<'info' | 'warning' | 'error'>('info');

  const handleError = (type: 'info' | 'warning' | 'error') => {
    setError('Online reservation are not available at the moment! Please contact +254115425094 on Whatsapp to complete your room reservation. Thank you');
    setErrorType(type);
  };

  return (
    <div className="check-rt">
      <div className="check">
        <p>{price}<span>night</span></p>
        <form action="" className="grid grid-cols2 grid-rows2">
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
            <input type="text" value="1 Guest"/>
          </div>
        </form>
        <span>Those dates are not available</span>
        <button onClick={() => handleError('warning')}>Check reservation</button>
      </div>
      <div className="story">
        {description}
      </div>
      <ErrorMessage message={info} type={errorType} />
    </div>
  );
};

export default Payment;
