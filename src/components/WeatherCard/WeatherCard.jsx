import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div>
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;