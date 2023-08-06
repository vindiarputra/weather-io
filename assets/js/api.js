/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */
// api.js

"use strict";

const api_key = `4747d8694b3786b53ea9011b0a427629`;

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {function} callback callback
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&appid=${api_key}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&appid=${api_key}&units=metric`;
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&appid=${api_key}`;
  },
  reversedGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&appid=${api_key}&limit=5`;
  },
  geo(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${api_key}&limit=5`;
  },
};

// 1:52:19
