'use client';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from 'next/image';

function WeatherPage() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    async function fetchWeatherData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const cityFromUrl = urlParams.get('city');

      // Set city in state if it's not null
      if (cityFromUrl) {
        setCity(cityFromUrl);
      }
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8ad9c061617e492fa1a73003242104&q=${city}`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeatherData();
  }, [city]);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-purple-700 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white text-center mb-4">
        <h1 className="text-4xl font-bold font-Raleway mb-2 pt-[10px]">
          {city}, {weather?.location?.country}
        </h1>
        <p className="text-xl font-Montserrat">Timezone: {weather?.location?.tz_id}</p>
      </div>
      <div className="bg-white bg-opacity-40 rounded-lg px-8 pt-3 w-[80%]">
        <div className="mb-4">
          <h2 className="md:text-xl font-Montserrat text-lg mb-2 text-purple-700">Current Weather</h2>
          <p className="font-extralight text-3xl text-purple-500 transform scale-y-[2]">
            {Math.floor(weather?.current?.temp_c)}°C
          </p>
          <p className="text-lg mt-[20px] text-purple-700 font-Montserrat">
            <span className='text-purple-600'>Description:</span> {weather?.current?.condition?.text}
          </p>
          <p className="text-lg text-purple-700 font-Montserrat"><span className='text-purple-600'>Humidity:</span> {weather?.current?.humidity}%</p>
          <p className="text-lg text-purple-700">
            <span className='text-purple-600'>Wind Speed:</span> {weather?.current?.wind_kph} km/h
          </p>
          <p className="text-lg text-purple-700 font-Montserrat"><span className='text-purple-600'>Pressure:</span> {weather?.current?.pressure_mb} hPa</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2 text-purple-700 font-Montserrat">Forecast</h2>
          <div className="flex gap-x-3 overflow-x-auto font-Montserrat">
            {weather?.forecast?.forecastday[0]?.hour
              .filter(forecast => {
                const forecastHour = new Date(forecast.time).getHours();
                const currentHour = new Date().getHours();
                return forecastHour >= currentHour;
              })
              .map((forecast, index) => (
                <div key={index} className="bg-gray-200 bg-opacity-60 rounded-lg md:min-w-32 min-w-20 p-4 mb-4 text-center flex flex-col justify-between">
                  <p className="md:text-lg text-[10px] text-purple-700">{formatTime(forecast.time)}</p>
                  <Image src={`https:${forecast?.condition?.icon}`} alt="Weather Icon" width={48} height={48} className='mx-auto' />
                  <p className="text-lg text-purple-700">{Math.floor(forecast?.temp_c)}°C</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatTime(timeString) {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const twelveHourFormat = hours % 12 || 12;
  const currentTime = new Date();

  if (currentTime.getHours() === hours && currentTime.getMinutes() >= 15) {
    return `Now`;
  }

  return `${twelveHourFormat}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

export default WeatherPage;
