import { getIcon } from "../../services/WeatherServices";

const Modal = ({ detailedWeatherInfo }) => {
  const imgUrl = getIcon(detailedWeatherInfo.weather[0].icon);
  return (
    <div>
      <img src={imgUrl} alt="weather condition icon" />
      <p>{detailedWeatherInfo.weather[0].description}</p>
      <p>Min:{detailedWeatherInfo.temp.min}</p>
      <p>Max:{detailedWeatherInfo.temp.max}</p>
      <p>Sunrise{detailedWeatherInfo.sunrise}</p>
      <p>Humidity{detailedWeatherInfo.humidity}</p>
      <p>Wind{detailedWeatherInfo.wind}</p>
      <p>{detailedWeatherInfo.sunset}</p>
    </div>
  );
};

export default Modal;
