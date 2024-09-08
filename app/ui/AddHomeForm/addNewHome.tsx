"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for Next.js 13+
import axios from "axios";
import styles from "./addNewHome.module.css";

const AddHomeForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState([""]); // Array to store image URLs
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // Use the hook directly

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure at least one image is provided
    if (imageUrl.length < 1 || imageUrl[0] === "") {
      setError("Please provide at least one image URL.");
      return;
    }

    const homeData = {
      name,
      location,
      description,
      price: parseFloat(price), // Convert price to a number
      imageUrl, // Image URLs as an array
    };

    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        setError("You must be logged in to add a home.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/homes",
        homeData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 201) {
        setSuccess("Home added successfully!");
        setError("");

        // Redirect to a different page or reset form
        setTimeout(() => {
          router.push("/homes"); // Redirect to the homes page
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add home.");
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl[0]} // Access the first image URL in the array
          onChange={(e) => setImageUrl([e.target.value])} // Set the array with one image URL
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button type="submit">Add Home</button>
    </form>
  );
};

export default AddHomeForm;
