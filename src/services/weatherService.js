import useSWR from 'swr';

const fetchWeatherData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useWeatherData = (lat, lon) => {
    const apiKey = '668ff7854045e0a6de79c78eff906c83';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
  
    const { data: weatherData, error: weatherError } = useSWR(apiUrl, fetchWeatherData);
  
    return {
      weatherData,
      isLoading: !weatherError && !weatherData,
      isError: weatherError,
    };
  };