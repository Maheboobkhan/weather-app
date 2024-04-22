// // // components/CityTable.js
// // 'use client';
// // import React, { useState, useEffect } from "react";
// // import Link from "next/link"; // Correct import for Next.js Link
// // import { fetchCities } from "../services/cityService";
// // import data from "../components/data.json";
// // const getTimeDiffAndTimeZone = require('city-country-timezone');

// // function CityTable() {
// //   const [cities, setCities] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");

// // const country = "Lagos, Nigeria"; //city and country

// // const { timezone, time_diff } = getTimeDiffAndTimeZone(country);

// // console.log(`Timezone: ${timezone}, Time Difference: ${time_diff}`); 

// //   useEffect(() => {
// //     // fetchCities().then((data) => setCities(data));
// //     setCities(data);
// //   }, []);

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //     // Implement filtering logic here
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <input
// //         type="text"
// //         placeholder="Search by City or Country..."
// //         value={searchTerm}
// //         onChange={handleSearch}
// //         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
// //       />
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full border border-gray-300">
// //           <thead>
// //             <tr className="bg-gray-200 text-gray-700">
// //               <th className="px-4 py-2">City Name</th>
// //               <th className="px-4 py-2">Country</th>
// //               <th className="px-4 py-2">Timezone</th>
// //               {/* Add more columns as needed */}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {cities.map((city) => (
// //               <tr key={city.id} className="border-b border-gray-300">
// //                 <td className="px-4 py-2">
// //                   <Link href={{
// //                     pathname: '/weather',
// //                     query: { city: city.city } // Pass timezone as query parameter
// //                   }} className="text-blue-500 hover:underline">
// //                     {city.city}
// //                   </Link>

// //                 </td>
// //                 <td className="px-4 py-2">{city.country}</td>
// //                 <td className="px-4 py-2">{city.timezone}</td>
// //                 {/* Add more columns as needed */}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CityTable;


















// // components/CityTable.js
// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";
// const getTimeDiffAndTimeZone = require('city-country-timezone');

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter cities based on search term
//   const filteredCities = cities.filter(city => {
//     return city.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
//            city.country.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCities.map((city) => (
//               <tr key={city.id} className="border-b border-gray-300">
//                 <td className="px-4 py-2">
//                   <Link href={{
//                     pathname: '/weather',
//                     query: { city: city.city }
//                   }} className="text-blue-500 hover:underline">
//                     {city.city}
//                   </Link>
//                 </td>
//                 <td className="px-4 py-2">{city.country}</td>
//                 <td className="px-4 py-2">{city.timezone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;













// components/CityTable.js
// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]); // State for suggestions

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Filter cities based on search term
//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) || 
//              city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     // Extract suggestions from filtered cities
//     const suggestedCities = filteredCities.map(city => city.city);
//     setSuggestions(suggestedCities);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       {/* Render suggestions */}
//       {suggestions.length > 0 && (
//         <ul className="bg-white border border-gray-300 rounded-md px-4 py-2">
//           {suggestions.map((suggestion, index) => (
//             <li key={index} className="cursor-pointer hover:bg-gray-100 py-1" onClick={() => setSearchTerm(suggestion)}>
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cities.map((city) => (
//               <tr key={city.id} className="border-b border-gray-300">
//                 <td className="px-4 py-2">
//                   <Link href={{
//                     pathname: '/weather',
//                     query: { city: city.city }
//                   }} className="text-blue-500 hover:underline">
//                     {city.city}
//                   </Link>
//                 </td>
//                 <td className="px-4 py-2">{city.country}</td>
//                 <td className="px-4 py-2">{city.timezone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;






























// components/CityTable.js
// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]); // State for suggestions

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Filter cities based on search term
//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) ||
//         city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     // Extract suggestions from filtered cities
//     const suggestedCities = filteredCities.map(city => city.city);
//     setSuggestions(suggestedCities);
//   };

//   // Handle click on suggestion
//   const handleSuggestionClick = (suggestion) => {
//     setSelectedCity(suggestion);
//     setSearchTerm("");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       {/* Render suggestions */}
//       {suggestions.length > 0 && (
//         <ul className="bg-white border border-gray-300 rounded-md px-4 py-2">
//           {suggestions.map((suggestion, index) => (
//             <Link href={{
//               pathname: '/weather',
//               query: { city: suggestion }
//             }}>
//               <li key={index} className="cursor-pointer hover:bg-gray-100 py-1">
//                 {suggestion}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Render other cities */}
//             {cities.map((city) => (
//               <tr key={city.id} className="border-b border-gray-300">
//                 <td className="px-4 py-2">
//                   <Link href={{
//                     pathname: '/weather',
//                     query: { city: city.city }
//                   }} className="text-blue-500 hover:underline">
//                     {city.city}
//                   </Link>
//                 </td>
//                 <td className="px-4 py-2">{city.country}</td>
//                 <td className="px-4 py-2">{city.timezone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;















// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) ||
//         city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     const suggestedCities = filteredCities.map(city => city.city);
//     setSuggestions(value ? suggestedCities : []);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       {suggestions.length > 0 && searchTerm && (
//         <ul className="bg-white border border-gray-300 rounded-md px-4 py-2">
//           {suggestions.map((suggestion, index) => (
//             <Link href={{
//               pathname: '/weather',
//               query: { city: suggestion }
//             }} key={index}>
//               <li className="cursor-pointer hover:bg-gray-100 py-1">
//                 {suggestion}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {!searchTerm && // Render only if search term is empty
//               cities.map((city) => (
//                 <tr key={city.id} className="border-b border-gray-300">
//                   <td className="px-4 py-2">
//                     <Link href={{
//                       pathname: '/weather',
//                       query: { city: city.city }
//                     }} className="text-blue-500 hover:underline">
//                       {city.city}
//                     </Link>
//                   </td>
//                   <td className="px-4 py-2">{city.country}</td>
//                   <td className="px-4 py-2">{city.timezone}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;










// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) ||
//         city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     const suggestedCities = filteredCities.map(city => city);
//     setSuggestions(value ? suggestedCities : []);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchTerm ? ( // Render filtered cities when search term is not empty
//               suggestions.map((city) => (

//                 // <tr key={city.id} className="border-b text-center border-gray-300 hover:cursor-pointer hover:bg-gray-100">
//                 //   <Link href={{
//                 //     pathname: '/weather',
//                 //     query: { city: city.city }
//                 //   }}>
//                 //     <td className="px-4 py-2">{city.city}</td></Link>
//                 //   <td className="px-4 py-2">{city.country}</td>
//                 //   <td className="px-4 py-2">{city.timezone}</td>
//                 // </tr>


//                 <tr
//                   key={city.id}
//                   className="border-b text-center border-gray-300 hover:cursor-pointer hover:bg-gray-100"
//                   onClick={() => {
//                     window.location.href = `/weather?city=${encodeURIComponent(city.city)}`;
//                   }}
//                 >
//                   <td className="px-4 py-2">{city.city}</td>
//                   <td className="px-4 py-2">{city.country}</td>
//                   <td className="px-4 py-2">{city.timezone}</td>
//                 </tr>


//               ))
//             ) : (
//               // Render all cities when search term is empty
//               cities.map((city) => (
//                 <tr key={city.id} className="border-b border-gray-300 text-center hover:cursor-pointer hover:bg-gray-100" onClick={() => {
//                   window.location.href = `/weather?city=${encodeURIComponent(city.city)}`;
//                 }}>
//                 <td className="px-4 py-2 text-blue-500 hover:underline">{city.city}</td>
//                 <td className="px-4 py-2">{city.country}</td>
//                 <td className="px-4 py-2">{city.timezone}</td>
//               </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;












// 'use client';
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import data from "../components/data.json";

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) ||
//         city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     const suggestedCities = filteredCities.map(city => city);
//     setSuggestions(value ? suggestedCities : []);
//     setSelectedSuggestionIndex(-1);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowUp") {
//       setSelectedSuggestionIndex(prevIndex =>
//         prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
//       );
//     } else if (e.key === "ArrowDown") {
//       setSelectedSuggestionIndex(prevIndex =>
//         prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
//       );
//     } else if (e.key === "Enter" && selectedSuggestionIndex !== -1) {
//       const selectedCity = suggestions[selectedSuggestionIndex];
//       navigateToWeatherPage(selectedCity.city);
//     }
//   };

//   const navigateToWeatherPage = (city) => {
//     window.location.href = `/weather?city=${encodeURIComponent(city)}`;
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <input
//         type="text"
//         placeholder="Search by City or Country..."
//         value={searchTerm}
//         onChange={handleSearch}
//         onKeyDown={handleKeyDown}
//         className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//       />
//       {suggestions.length > 0 && (
//         <ul className="bg-white border border-gray-300 rounded-md py-2">
//           {suggestions.map((city, index) => (
//             <li
//               key={city.id}
//               className={`cursor-pointer py-2 pl-4 hover:bg-gray-100 ${selectedSuggestionIndex === index ? 'bg-gray-100' : ''
//                 }`}
//               onClick={() => navigateToWeatherPage(city.city)}
//             >
//               <div>{city.city}</div>
//               <div className="text-gray-500 text-sm">{city.country}, {city.timezone}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">

//           {!searchTerm && <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="px-4 py-2">City Name</th>
//               <th className="px-4 py-2">Country</th>
//               <th className="px-4 py-2">Timezone</th>
//             </tr>
//           </thead>}
//           <tbody>
//             {!searchTerm && // Render only if search term is empty
//               cities.map((city) => (
//                 <tr
//                   key={city.id}
//                   className="border-b border-gray-300 text-center hover:cursor-pointer hover:bg-gray-100"
//                   onClick={() => navigateToWeatherPage(city.city)}
//                 >
//                   <td className="px-4 py-2 text-blue-500 hover:underline">{city.city}</td>
//                   <td className="px-4 py-2">{city.country}</td>
//                   <td className="px-4 py-2">{city.timezone}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default CityTable;







// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import data from "../components/data.json";
// import '../app/globals.css';

// function CityTable() {
//   const [cities, setCities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
//   const suggestionsListRef = useRef(null);

//   useEffect(() => {
//     setCities(data);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filteredCities = cities.filter(city => {
//       return city.city.toLowerCase().includes(value.toLowerCase()) ||
//         city.country.toLowerCase().includes(value.toLowerCase());
//     });

//     const suggestedCities = filteredCities.map(city => city);
//     setSuggestions(value ? suggestedCities : []);
//     setSelectedSuggestionIndex(-1);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowUp") {
//       setSelectedSuggestionIndex(prevIndex =>
//         prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
//       );
//     } else if (e.key === "ArrowDown") {
//       setSelectedSuggestionIndex(prevIndex =>
//         prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
//       );
//     } else if (e.key === "Enter" && selectedSuggestionIndex !== -1) {
//       const selectedCity = suggestions[selectedSuggestionIndex];
//       navigateToWeatherPage(selectedCity.city);
//     }
//   };

//   const navigateToWeatherPage = (city) => {
//     window.location.href = `/weather?city=${encodeURIComponent(city)}`;
//   };

//   useEffect(() => {
//     if (suggestionsListRef.current && selectedSuggestionIndex !== -1) {
//       suggestionsListRef.current.scrollTo({
//         top: suggestionsListRef.current.children[selectedSuggestionIndex].offsetTop - suggestionsListRef.current.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   }, [selectedSuggestionIndex]);

//   return (
//     <div className="container mx-auto">
//       <div className="mx-auto px-4 py-8">
//         <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-8">Weather Explorer <span className="hidden md:inline">(Forecast Finder)</span></h1>

//         <input
//           type="text"
//           placeholder="Search by City or Country..."
//           value={searchTerm}
//           onChange={handleSearch}
//           onKeyDown={handleKeyDown}
//           className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
//         />
//         {suggestions.length > 0 && (
//           <ul
//             ref={suggestionsListRef}
//             className="bg-white border border-gray-300 rounded-md py-2 max-h-60 overflow-y-auto"
//           >
//             {suggestions.map((city, index) => (
//               <li
//                 key={city.id}
//                 className={`cursor-pointer py-2 pl-3 hover:bg-gray-100 ${selectedSuggestionIndex === index ? 'bg-gray-100' : ''
//                   }`}
//                 onClick={() => navigateToWeatherPage(city.city)}
//               >
//                 <div>{city.city}</div>
//                 <div className="text-gray-500 text-sm">{city.country}, {city.timezone}</div>
//               </li>
//             ))}
//           </ul>
//         )}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300">
//             {!searchTerm && <thead>
//               <tr className="bg-gray-200 text-gray-700">
//                 <th className="px-4 py-2">City Name</th>
//                 <th className="px-4 py-2">Country</th>
//                 <th className="px-4 py-2">Timezone</th>
//               </tr>
//             </thead>}
//             <tbody>
//               {!searchTerm && // Render only if search term is empty
//                 cities.map((city) => (
//                   <tr
//                     key={city.id}
//                     className="border-b border-gray-300 text-center hover:cursor-pointer hover:bg-gray-100"
//                     onClick={() => navigateToWeatherPage(city.city)}
//                   >
//                     <td className="px-4 py-2 text-blue-500 hover:underline">{city.city}</td>
//                     <td className="px-4 py-2">{city.country}</td>
//                     <td className="px-4 py-2">{city.timezone}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CityTable;




'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import data from "../components/data.json";
import '../app/globals.css';

function CityTable() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const suggestionsListRef = useRef(null);

  useEffect(() => {
    setCities(data);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredCities = cities.filter(city => {
      return city.city.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase());
    });

    const suggestedCities = filteredCities.map(city => city);
    setSuggestions(value ? suggestedCities : []);
    setSelectedSuggestionIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
      );
    } else if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex(prevIndex =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "Enter" && selectedSuggestionIndex !== -1) {
      const selectedCity = suggestions[selectedSuggestionIndex];
      navigateToWeatherPage(selectedCity.city);
    }
  };

  const navigateToWeatherPage = (city) => {
    window.location.href = `/weather?city=${encodeURIComponent(city)}`;
  };

  useEffect(() => {
    if (suggestionsListRef.current && selectedSuggestionIndex !== -1) {
      suggestionsListRef.current.scrollTo({
        top: suggestionsListRef.current.children[selectedSuggestionIndex].offsetTop - suggestionsListRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [selectedSuggestionIndex]);

  return (
    <div className="container mx-auto">
      <div className="background"></div>
      <div className="z-10 relative mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl text-blue-600 mb-4 md:mb-8 font-Montserrat">Weather Explorer <span className="hidden md:inline">(Forecast Finder)</span></h1>

        <input
          type="text"
          placeholder="Search by City or Country..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        />
        {suggestions.length > 0 && (
          <ul
            ref={suggestionsListRef}
            className="border border-gray-300 rounded-md py-2 max-h-60 overflow-y-auto"
          >
            {suggestions.map((city, index) => (
              <li
                key={city.id}
                className={`cursor-pointer py-2 pl-3 hover:bg-gray-100 ${selectedSuggestionIndex === index ? 'bg-gray-100' : ''
                  }`}
                onClick={() => navigateToWeatherPage(city.city)}
              >
                <div>{city.city}</div>
                <div className="text-gray-500 text-sm">{city.country}, {city.timezone}</div>
              </li>
            ))}
          </ul>
        )}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            {!searchTerm && <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2">City Name</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2">Timezone</th>
              </tr>
            </thead>}
            <tbody>
              {!searchTerm && // Render only if search term is empty
                cities.map((city) => (
                  <tr
                    key={city.id}
                    className="border-b border-gray-300 text-center hover:cursor-pointer hover:bg-gray-100"
                    onClick={() => navigateToWeatherPage(city.city)}
                  >
                    <td className="px-4 py-2 text-blue-600 hover:underline">{city.city}</td>
                    <td className="px-4 py-2">{city.country}</td>
                    <td className="px-4 py-2">{city.timezone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CityTable;
