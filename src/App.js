import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";

import { CurrentWeather, WeatherItem } from "./components/WeatherItem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showData, setShowData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "802cb808854e62aea8fbf43c3043a1ad";

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${API_KEY}`;

  const handleSearch = async () => {
    setIsLoading(true);

    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`404! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((showData) => {
        setShowData(showData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error to fetch weather data:", error);
        alert("this is not a city name ", error);

        setIsLoading(true);
      });
  };

  useEffect(() => {
    if (setIsLoading) {
      handleSearch();
    }
  }, []);

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="app">
      <Nav onClick={handleSearch} onInputChange={handleInputValueChange} />

      {showData && !isLoading ? (
        <div className="main">
          <CurrentWeather showData={showData} />

          <WeatherItem showData={showData} />
        </div>
      ) : (
        <span>Loading.......</span>
      )}
    </div>
  );
}

export default App;
