const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

if (key === undefined) {
   throw new Error("Cannot read API key");
}

const keyQuery = `appid=${key}`;
const server = "http://api.openweathermap.org";

// using geocoding to get lat/lon of location
export async function getLatLon(searchTerm) {
   const result = await fetch(
      `${server}/geo/1.0/direct?q=${searchTerm}&${keyQuery}`
   );

   if (result.status === 400) return undefined;
   if (result.status !== 200) throw new Error("Could not read location data");

   return await result.json();
}

// retrieving weather all data for location using lat&lon
export async function getWeatherData(lat, lon) {
   const result = await fetch(
      `${server}/data/2.5/onecall?lat=${lat}&lon=${lon}&${keyQuery}`
   );

   console.log("weather", result);
   console.log("weather", result.json());

   if (result.status === 400) return undefined;
   if (result.status !== 200) throw new Error("Could not read weather data");

   return await result.json();
}

// getting png icon of weather condition
export async function getIcon(iconString) {
   console.log("icon", `http://openweathermap.org/img/wn/${iconString}@2x.png`);
   return `http://openweathermap.org/img/wn/${iconString}@2x.png`;
}
