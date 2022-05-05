const Card = ({ data }) => {
  const days = data.daily;

  days.map((day) => {
    return (
      <div className="app">
        <div className="container">
          <div className="top">
            <div className="location">
              <p>London</p>
            </div>
            <div className="temp">
              <h1>{day.temp.day}</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>65F</p>
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              <p>12 MPH</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
