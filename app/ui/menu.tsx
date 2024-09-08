"use client";

import React, { useState, useEffect } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import Link from 'next/link';
import axios from 'axios';
import "../globals.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Check if user is logged in by checking the token
    const token = localStorage.getItem('token');

    if (token) {
      // Fetch user profile
      axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUsername(response.data.username); // Set the username
        console.log("Profile fetched:", response.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  return (
    <nav className="mobile-menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBarsStaggered />
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        {username ? (
          <li><a href="#">{username}</a></li> // Show the username when logged in
        ) : (
          <li><Link href="/auth/signup">Sign Up</Link></li> // Show signup link when not logged in
        )}
        <li><Link href=".." className="active">Stays</Link></li>
        <li><Link href="/homes/reviews" passHref>Experiences</Link></li>
        <li><a href="#">Airbnb your home</a></li>
        <li><a href="#">Explore</a></li>
        <hr />
        <li><a href="#">Help center</a></li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
