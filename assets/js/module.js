/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

export const weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

export const mps_to_kmh = (mps) => {
  const kmh = mps * 3600;
  return kmh / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message: "Air quality is considered good. Air pollution poses little or no risk.",
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable. However, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message: "Air quality is acceptable; however, there may be a health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  4: {
    level: "Poor",
    message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
  },
  5: {
    level: "Very Poor",
    message: "Health alert: everyone may experience more serious health effects.",
  },
};

// export const getDate = (dateUnix, timezone) => {
//     const date = new Date((dateUnix + timezone) * 1000);

//     // Define weekDayNames and monthNames arrays or use built-in functions
//     const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//     const weekDayName = weekDayNames[date.getUTCDay()];
//     const monthName = monthNames[date.getUTCMonth()];

//     return `${weekDayName}, ${date.getUTCDate()} ${monthName}`;
// };
