"use client";

import { useEffect, useState } from 'react';
import Card from '@/app/ui/card';
import { getUserHomes } from '../../homes/api'; // Use the getUserHomes function to fetch homes for the logged-in user
import '../../globals.css';

export default function Home() {
  const [homes, setHomes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserHomes() {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage or your auth context
        if (!token) {
          setError('No authentication token found.');
          setLoading(false);
          return;
        }

        const data = await getUserHomes(token); // Fetch homes specific to the logged-in user
        setHomes(data);
      } catch (err) {
        console.error('Error fetching user homes:', err);
        setError('Failed to fetch homes.');
      } finally {
        setLoading(false);
      }
    }

    fetchUserHomes();
  }, []);

  if (loading) return <p>Loading homes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="section-1 flex p-5">
        {homes.map((home) => (
          <Card
            key={home._id}
            rate={home.rating}
            hrefLink={`../../homes/update/${home._id}`}
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
