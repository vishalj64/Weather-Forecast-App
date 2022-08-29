import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import dexter from '../assets/dexter.png';
import config from '../config.json'
const WeatherForecast = () => {

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");


  // function get temp data
  const getTempData = (api, query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.sys.country)
        setData(res);
        setCity(res.name);
        // console.log(res.main);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // call use Effect for render data every search input
  useEffect(() => {
    getTempData(config.OPEN_WEATHER_API_KEY, inputValue);
  }, [inputValue]);


  return (
    <div className="app-body">
      <div className="desc-calc">
        <h1 className="desc-font">Let&apos;s find weather in my city</h1>
        <img src={dexter} className="dex-img" alt="dexter" />
      </div>

      <div className='main'>
        <input className="weather-input-city"
          type="text"
          placeholder="Enter City"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        />

        {!inputValue.length ? null : data ? (
          <div>
            <p className="weather-p-city">Weather Details of City : {city}, {data.sys.country}</p>

            <div className="weather-information-container">
              <p className='weather-details'>Current Temperature : {data.main.temp} °C</p>
              <p className='weather-details'>Temperature Range : {data.main.temp_min} °C  to  {data.main.temp_max} °C</p>
              <p className='weather-details'>Humidity  : {data.main.humidity}</p>

            </div>
          </div>
        ) : (
          <p className="weather-valid-city-name">Enter Valid City Name</p>
        )}
      </div>
    </div>

  );
};

export default WeatherForecast;
