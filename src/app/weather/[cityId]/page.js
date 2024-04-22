// // pages/weather/[cityId].js
// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import WeatherPage from '../../../components/WeatherPage';
// // import { fetchWeatherData } from '../../services/weatherService'; // Import your function to fetch weather data

// function WeatherCity() {
//   const router = useRouter();
//   const  cityId  = router.query;

//   // Fetch weather data based on cityId
//   const weatherData = fetchWeatherData(cityId); // Implement your fetchWeatherData function

//   return <WeatherPage weatherData={weatherData} />;
// }

// export default WeatherCity;



// import WeatherPage from "../../../components/WeatherPage";

// export default function weather(){
//   return (
//     <div>
//       <WeatherPage />
//     </div>
//   )
// }