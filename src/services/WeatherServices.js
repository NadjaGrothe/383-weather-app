const key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

if (key === undefined) {
  throw new Error("Cannot read API key");
}

const keyQuery = `appid=${key}`;
const server = "https://api.openweathermap.org";

// using geocoding to get lat/lon of location
export async function getLatLon(searchTerm) {
  if (!searchTerm) return;
  const result = await fetch(
    `${server}/geo/1.0/direct?q=${searchTerm}&${keyQuery}`
  );

  if (result.status === 400) return undefined;
  if (result.status !== 200) throw new Error("Could not read location data");
  return await result.json();
}

// retrieving weather all data for location using lat&lon
export async function getWeatherData(lat, lon) {
  if (!lat || !lon) return;
  const result = await fetch(
    `${server}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&${keyQuery}`
  );

  if (result.status === 400) return undefined;
  if (result.status !== 200) throw new Error("Could not read weather data");

  return await result.json();
}

// getting png icon of weather condition
export function getIcon(iconString) {
  return `https://openweathermap.org/img/wn/${iconString}@2x.png`;
}
