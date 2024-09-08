"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation for Next.js 13+
import axios from "axios";
import styles from "./signup.module.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Optional role field
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const router = useRouter(); // Use the hook directly

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
          role, // Optional role field
        }
      );

      if (response.status === 201) {
        setSuccess("User created successfully!");
        setError("");

        // Redirect to login page after successful signup
        setTimeout(() => {
          router.push("/auth/login");
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed.");
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
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
      <div>
        <label htmlFor="role">Role (optional):</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
