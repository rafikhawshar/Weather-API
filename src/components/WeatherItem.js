import React from "react";
import "./../App.css";
import storm from "../img/weather-icons/storm.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import unknown from "../img/weather-icons/unknown.svg";


function CurrentWeather({ showData }) {
  console.log(showData)
  return (
    <section className="nowWeather">

      <img className="nowImg" src={weatherId(showData, 0)} alt="weatherImag" />

      <div id="weatherNowTitle">{showData.list[0].weather[0].description}</div>
      <p className="para"><span className="weatherTemp">Temperature</span> {Math.round(showData.list[0].main.temp_min)} &deg;C to {Math.round(showData.list[0].main.temp_max)} &deg;C </p>

      <p className="para2">
        <span className="a">Humidity </span>{showData.list[0].main.humidity}%<span></span><span className="a">Pressure </span><span> {showData.list[0].main.pressure}</span>
      </p>

    </section>

  )

}




function WeatherItem({ showData }) {

  const getData = showData.list.slice(1, 7);

  return (

    <section className="dayweather">

      {getData.map((e, i) => {
        let hours = e.dt_txt.split(" ")
        return (
          <article className="timedetail">
            <p className="time">{hours[1].slice(0, 5)}</p>
            <img className="wImg" src={weatherId(showData, i + 1)} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
            <span className="temp">{Math.round(e.main.temp)}&deg;C </span>
          </article>
        )
      })}

    </section>
  )
}

function weatherId(showData, i) {
  let id = showData.list[i].weather[0].id;
  if (id < 300) {
    return storm;
  }
  else if (id >= 300 && id < 500) {
    return drizzle;
  }
  else if (id >= 500 && id < 600) {
    return rain;
  }
  else if (id >= 600 && id < 700) {
    return snow;
  }
  else if (id >= 700 && id < 800) {
    return fog;
  }
  else if (id === 800) {
    return clear;
  }

  else if (id === 801) {
    return partlycloudy;
  }
  else if (id > 801 && id <= 805) {
    return mostlycloudy;
  }
  else {
    return unknown;
  }
} 

export { CurrentWeather, WeatherItem }