import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherWidget from './weather-widget';
import { GetWeather } from './api/weather-api';
import { IWeatherDataDay } from './types';

function App() {

  const [weatherData, setWeatherData] = useState({daily: [], latitude: 0, longitude: 0});
  const [currentDay, setCurrentDay] = useState<IWeatherDataDay>();

  useEffect(() => {
   const getGPS = async () => {
      let pos = { lat: 33.96634537702374, lng: -83.90279033981517 };
      if (navigator.geolocation) {
        const geoPos: any = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        pos = {
          lat: geoPos.coords.latitude,
          lng: geoPos.coords.longitude,
        };
      }
      return pos;
    };

    const getWeatherData = async () => {
      let pos = await getGPS(); 
      const weather = await GetWeather(pos);
      setWeatherData(weather);
      setCurrentDay(weather.daily[Object.keys(weather.daily)[0]]);
    };

    getWeatherData();
  }, []);

  return (
    <WeatherWidget weather={weatherData} currentDay={currentDay} />
  );
}

export default App;
