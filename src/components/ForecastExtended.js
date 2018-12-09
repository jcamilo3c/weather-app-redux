import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import {addSpaceString} from './WeatherLocation/Location';
import './styles.css';

const renderForecastItemDays = forecastData => {
    return(forecastData.map((forecast) =>
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>
    ));
}

const renderProgress = () => (
    <CircularProgress size={80}></CircularProgress>
)

const ForecastExtended = ({city, forecastData }) => (
    <div>
        <h2 className="forecast-title">Pronóstico extendido para {addSpaceString(city)}</h2>
        <hr></hr>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

export default ForecastExtended;
