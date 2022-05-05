const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

if (key === undefined) {
   throw new Error("Cannot read API key");
}

const keyQuery = `appid=${key}`;
const server = "http://api.openweathermap.org";

// /data/2.5/onecall?

// get lat/lon of location
export async function searchLocation(searchTerm) {
   const result = await fetch(
      `${server}/geo/1.0/direct?q=${searchTerm}&${keyQuery}`
   );

   if (result.status === 400) return undefined;
   if (result.status === 200) throw new Error("Could not read location data");

   return await result.json();
}
