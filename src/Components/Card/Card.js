import { getIcon } from "../../services/WeatherServices";

const Card = ({ data }) => {
   console.log("data is", data);

   const days = data.daily;

   return days.map((day) => {
      const imgUrl = getIcon(day.weather[0].icon);
      console.log(imgUrl);
      return (
         <div className="app">
            <div className="container">
               <div className="top">
                  <div className="location">
                     <img src={imgUrl} alt="weather condition" />
                  </div>
                  <div className="description">
                     <p>{day.weather[0].description}</p>
                  </div>
                  <div className="temp">
                     <h1>{day.temp.day}°C</h1>
                  </div>
               </div>
               <div className="bottom">
                  <div className="feels">
                     <p>{day.feels_like.day}°C</p>
                  </div>
                  <div className="humidity">
                     <p>{day.humidity}</p>
                  </div>
                  <div className="wind">
                     <p>{day.wind_speed}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   });
};

export default Card;
