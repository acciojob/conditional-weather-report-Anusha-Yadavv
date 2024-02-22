// WeatherDisplay.js
import React from "react";

const WetherDisplay = ({ weatherData }) => {
  // Determine temperature display color based on the temperature value
  const temperatureColor = weatherData.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {weatherData.temperature}</p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  );
};

export default WetherDisplay;
