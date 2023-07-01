// App.js
import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard'
import Button from './components/Button/Button'
import { useWeatherData } from './services/weatherService';

const App = () => {
  const [latitude, setLatitude] = useState({});
  const [longitude, setLongitude] = useState({});
  const [isCelsius, setIsCelsius] = useState(true)

  const handleTempChange = () => {
    setIsCelsius(!isCelsius);
  };
  

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchLocation();
  }, []);

  const { weatherData, isLoading, isError } = useWeatherData(latitude, longitude);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching weather data.</div>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherCard weatherData={weatherData}  />
      <div>
      <Button onClick={handleTempChange} isCelsius={isCelsius} />
      </div>
    </div>
  );
};

export default App;
