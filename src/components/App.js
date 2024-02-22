
// App.js
import React, { useState, useEffect } from "react";
import WetherDisplay from "./WeatherDisplay";

const App = () => {
  // Initialize weather data state with a default value
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  // Update weather data to the given weather input using useEffect hook
  useEffect(() => {
    // Simulating API call or fetching weather data from an external source
    const fetchWeatherData = () => {
      // Assuming the weather input provided as { temperature: 25, conditions: "Sunny" }
      setWeatherData({ temperature: 25, conditions: "Sunny" });
    };

    fetchWeatherData(); // Call the fetchWeatherData function
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>Current Weather</h1>
      <WetherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;

