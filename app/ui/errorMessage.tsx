"use client";

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
      padding: '18px 15px 18px 40px',
      margin: '10px auto',
      borderRadius: '25px',
      fontSize: '14px',
      width: '80vw',
      maxWidth: '450px', // Added max-width to limit width on larger screens
      position: 'fixed',
      bottom: '30px',
      right: '10px',
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
      color: '#22445c',
      padding: '16px', 
      borderRadius: '50%',
      fontSize: '18px',
      background: 'white', // Changed to white for better visibility
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
            borderColor: '#254f75',
            borderLeftColor: '#254f75',
            backgroundColor: '#f8911b',
            color: '#fffffa',
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
