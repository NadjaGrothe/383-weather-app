import "./App.css";
import { getLatLon, getWeatherData, getIcon } from "./services/WeatherServices";

function App() {
   async function test1() {
      await getWeatherData(51.5073219, -0.1276474);
   }

   function handleClick() {
      console.log(test1());
   }

   return (
      <div className="App">
         <button onClick={handleClick}>SEARCH</button>
      </div>
   );
}

export default App;
