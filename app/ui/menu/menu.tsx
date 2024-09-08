"use client";

import React, { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./menu.module.css"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in by checking the token
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      // Fetch user profile
      axios
        .get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUsername(response.data.username);
          console.log("Profile fetched:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/#");
  };

  return (
    <nav className="mobile-menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBarsStaggered />
      </div>
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        {username ? (
          <>
            <li className={styles.username}>
              <a href="#">{username}</a>
            </li>
          </>
        ) : (
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        )}
        <li>
          <Link href=".." className="active">
            Stays
          </Link>
        </li>
        <li>
          <Link href="/homes/reviews" passHref>
            Experiences
          </Link>
        </li>
        <li>
          <a href="#">Airbnb your home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <hr />
        <li>
          <a href="#">Help center</a>
        </li>
        {username ? (
          <li>
            <button  className={styles.button} onClick={handleLogout}>Logout</button>
          </li>
        ):""}
      </ul>
    </nav>
  );
};

export default MobileMenu;
