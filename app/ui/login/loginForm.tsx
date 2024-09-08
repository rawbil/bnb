"use client";

import axios from "axios";
import { useRouter } from "next/navigation"; // next/navigation
import { useState } from "react";
import styles from "./login.module.css";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [splashMessage, setSplashMessage] = useState(""); // New state for splash message
  const router = useRouter();

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
        localStorage.setItem("token", response.data.token);

        // Fetch the user's profile details after successful login
        const profileResponse = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          }
        );

        // Show the splash screen with a welcome message
        setSplashMessage(`Welcome, ${profileResponse.data.username}!`);
        console.log("Profile Details:", profileResponse.data); // Log profile details to console
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
      setSuccess("");
    }
  };

  return (
    <div>
      {splashMessage ? ( // Conditionally show the splash screen
        <div className={styles.splashScreen}>{splashMessage}
        <a href="/"><button>Continue</button></a>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default SigninForm;
