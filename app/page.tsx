"use client";

import { useEffect, useState } from 'react';
import Card from '@/app/ui/card';
import { fetchHomes } from './homes/api';
import "./globals.css";

export default function Home() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    async function getHomes() {
      const data = await fetchHomes();
      setHomes(data);
    }
    getHomes();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="section-1 flex p-5">
        {homes.map((home) => (
          <Card
            key={home._id}
            rate={home.rating}
            hrefLink={`./homes/${home._id}`}
            county={home.name}
            region={home.location}
            specific={home.description}
            price={home.price}
            imageUrl={home.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
