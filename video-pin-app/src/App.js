import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");

  const correctPin = "1234"; // Replace with your PIN

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === correctPin) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect PIN! Please try again.");
    }
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <div className="auth-container">
          <h1>Welcome! 🎥</h1>
          <p>Please enter the PIN to watch the video:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="pin-input"
              maxLength={4}
            />
            <button type="submit" className="btn">Unlock</button>
          </form>
        </div>
      ) : (
        <div className="video-container">
          <h1>Enjoy the Video! 🥰</h1>
          <video controls>
            <source src="path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default App;
