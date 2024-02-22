// WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  // Determine temperature display color based on the temperature value
  const temperatureColor = weatherData.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color: temperatureColor }}>Temperature: {weatherData.temperature}</p>
      {weatherData.conditions && (
        <span>Conditions: {weatherData.conditions}</span>
      )}
    </div>
  );
};

export default WeatherDisplay;
