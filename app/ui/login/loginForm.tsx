"use client";

import axios from "axios";
import { useRouter } from "next/navigation"; // Ensure this is imported from next/navigation
import { useState } from "react";
import styles from "./login.module.css";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter(); // Use the hook directly

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setSuccess("Logged in successfully!");
        setError("");
        // Store the token (e.g., in localStorage or cookies)
        localStorage.setItem("token", response.data.token);

        // Redirect to home page after successful login
        setTimeout(() => {
          router.push("/"); // Redirect to the home page
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
