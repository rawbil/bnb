"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from "./update.module.css"

interface Home {
  _id: string;
  name: string;
  location: string;
  description: string;
  price: string;
}

const UpdateHomePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();

  const [homeData, setHomeData] = useState<Home>({
    _id: '',
    name: '',
    location: '',
    description: '',
    price: '',
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Unauthorized');
          return;
        }

        const response = await axios.get(`http://localhost:5000/api/homes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setHomeData(response.data);
        } else {
          setError('Failed to fetch home data');
        }
      } catch (err) {
        setError('Error fetching home data');
        console.error(err);
      }
    };

    fetchHome();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHomeData({ ...homeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized');
        return;
      }

      const response = await axios.put(`http://localhost:5000/api/homes/${id}`, homeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        router.push(`/homes/${id}`);
      } else {
        setError('Failed to update home');
      }
    } catch (err) {
      setError('Error updating home');
      console.error(err);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Update Home</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={homeData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={homeData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input type='text'
            name="description"
            value={homeData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={homeData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Home</button>
      </form>
    </div>
  );
};

export default UpdateHomePage;
