"use client";
import "../globals.css";
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";

interface ErrorMessageProps {
  message: string;
  type?: 'error' | 'warning' | 'info';
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, type = 'error' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 40000); // 40 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message || !visible) return null;

  const baseStyles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: '10px',
      margin: '10px auto',
      border: '1px solid',
      borderRadius: '5px',
      fontSize: '14px',
      width: '80vw',
      maxWidth: '370px', // Added max-width to limit width on larger screens
      position: 'fixed',
      bottom: '30px',
      backgroundColor: 'white', // added background color to ensure readability
      zIndex: 1000, // ensure it appears on top of other elements
      display: 'flex', // Added flex display for better alignment
      justifyContent: 'space-between', // Align content space-between
      alignItems: 'center', // Center items vertically
    },
    message: {
      margin: 0,
      flex: 1, // Allow message to take up remaining space
    },
    closeButton: {
      marginLeft: '10px',
      cursor: 'pointer',
      background: '#22445c',
      padding: '12px', // Adjusted padding for better size
      border: '1px solid',
      borderRadius: '50%',
      fontSize: '14px',
      color: 'white', // Changed to white for better visibility
    },
  };

  const getStyles = (type: string): { container: React.CSSProperties; message: React.CSSProperties } => {
    switch (type) {
      case 'warning':
        return {
          container: {
            ...baseStyles.container,
            borderColor: 'orange',
            borderLeftColor: 'orange',
            backgroundColor: '#fff3e6',
            color: 'orange',
          },
          message: baseStyles.message,
        };
      case 'info':
        return {
          container: {
            ...baseStyles.container,
            borderColor: '#22445c',
            borderLeftColor: '#22445c',
            backgroundColor: '#e6f3ff',
            color: '#22445c',
          },
          message: baseStyles.message,
        };
      case 'error':
      default:
        return {
          container: {
            ...baseStyles.container,
            borderColor: 'red',
            borderLeftColor: 'red',
            backgroundColor: '#ffe6e6',
            color: 'red',
          },
          message: baseStyles.message,
        };
    }
  };

  const styles = getStyles(type);

  return (
    <div style={styles.container}>
      <p style={styles.message}>{message}</p>
      <button style={baseStyles.closeButton} onClick={() => setVisible(false)}><IoCloseSharp /></button>
    </div>
  );
};

export default ErrorMessage;
