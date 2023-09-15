import React from "react";
import Search from "./components/Search";

import { CurrentWeather, WeatherItem } from "./components/WeatherItem"
import fakeWeatherData from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import mostlycloudy from "./img/weather-icons/partlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg"

import "./App.css";


function App() {
  return (
    <div className="app">
      
      <div id="wrapper">
        <header>

          <input type="text" name="city" id="city" placeholder="Type in a city name" />
          <input class="btn" type="submit" value="FIND WEATHER"></input>
        </header>

        <main>

          <section class="nowWeather">
            <img class="nowImg" src={mostlycloudy} alt="weatherImag" />
            <div id="weatherNowTitle">overcast clouds</div>
            <p className="para"><span className="weatherTemp">Temperature</span>  10&deg;C to 11&deg;C </p>

            <p className="para2">
              <span className="a">Humidity </span><span>78%</span><span className="a">Pressure </span>1<span>008.48</span>
            </p>


          </section>
          <section class="dayweather">
            <article class="timedetail">
              <time class="time" datetime="hh:mm">3:00</time>
              <img class="wImg" src={mostlycloudy} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">8&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">6:00</time>
              <img class="wImg" src={mostlycloudy} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">9&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">9:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">14&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">12:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">17&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">15:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">18&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">18:00</time>
              <img class="wImg" src={clear} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">16&deg;C </span>

            </article>
            <article class="timedetail">
              <time class="time" datetime="hh:mm">21:00</time>
              <img class="wImg" src={mostlycloudy} alt="weatherImag" placeholder="http://placekitten.com/g/200/300" />
              <span class="temp">13&deg;C </span>

            </article>


          </section>
        </main>
      </div>

    </div>
  )
}

export default App;