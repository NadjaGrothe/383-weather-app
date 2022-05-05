import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import { getLatLon, getWeatherData } from "../../services/WeatherServices";

function App() {
   //* useStats & useEffects for calling API data

   // stores user input value as string
   const [locationSearch, setLocationSearch] = useState(""); // setLocationSearch to pass into Button
   const [geoLocation, setGeoLocation] = useState({});
   const [weather, setWeather] = useState({});

   useEffect(() => {
      if (!locationSearch) return;
      async function getGeocode() {
         const geoLoc = await getLatLon(locationSearch);
         setGeoLocation(geoLoc);
      }
      getGeocode();
   }, [locationSearch]);

   useEffect(() => {
      if (!geoLocation) return;
      async function getWeather() {
         setWeather(await getWeatherData(geoLocation.lat, geoLocation.lon));
      }
      getWeather();
   }, [geoLocation]);

   function handleClick(userInput) {
      setLocationSearch(userInput);
      // console.log(userInput)
   }

   //   function convertUnixTimeToDate () {
   //     return new Date;
   //  }
   //  export const WeatherEntry= ({ weather }) => {
   //        <div>{convertUnixTimeToDate.toLocaleTimeString()}
   //        </div>
   //  }

   return (
      <div>
         <SearchBar handleClick={handleClick} />
         <Card data={weather}/>
      </div>
   );
}

export default App;
