import React from 'react';
import '../App.css';
var moment = require('moment');

/* Creates arrow functional component */
const Card = ({ reading }) => {
    /* Creates variable that will make use of the Date function */
    let newDate = new Date();
    /* Creates variable that does a calculation using the data from the parameter */
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    /* Data to be executed to the web page */
    return (
        /* Creates a div box */
        <div id="innerCard">
      {/* Converts text to heading format 4 and retrieves date to be formated to the day */}
      <h4>{moment(newDate).format('dddd')}</h4>
      {/* Creates a paragraph that retrieves data and formats it to the date and month */}
      <p>{moment(newDate).format('MMMM Do')}</p>
      <h5>Max/Min Temp</h5>
      {/* Rounds up data retrieved */}
      <h5>{Math.round(reading.main.temp_max - 273.15)}°C/{Math.round(reading.main.temp_min - 273.15)}°C</h5>
      <div>
        {/* Retrieves data from specified parameter */}
        <p>{reading.weather[0].description}</p>
      </div>
    </div>
    );
}

export default Card;