import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';
import PropTypes from 'prop-types';

const upperCase = day => {
    const firstLetter = day.substring(0, 1).toUpperCase();
    const complement = day.substring(1, day.length);
    return(`${firstLetter}${complement}`);
}

const ForecastItem = (props) => {
    const {weekDay, hour, data} = props;
    return(
        <div>
            <div><h3>{upperCase(weekDay)} - {hour} hs</h3></div>
            <WeatherData data={data}></WeatherData>
        </div>
    )
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastItem;
