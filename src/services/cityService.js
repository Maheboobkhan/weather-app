// cityService.js

// Mock city data
const citiesData = [
    { id: 1, name: "New York", country: "USA", timezone: "UTC-5" },
    { id: 2, name: "London", country: "UK", timezone: "UTC+0" },
    { id: 3, name: "Tokyo", country: "Japan", timezone: "UTC+9" },
    // Add more cities as needed
  ];
  
  // Mock API request to fetch cities
  export async function fetchCities() {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Return city data
    return citiesData;
  }
  