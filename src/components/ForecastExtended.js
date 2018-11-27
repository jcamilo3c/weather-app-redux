import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {getUrlForecastByCity} from './../services/getUrlByCity';
import transformForecast from './../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';
import {addSpaceString} from './WeatherLocation/Location';
import './styles.css';

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.city !== this.props.city) {
            this.setState({
                forecastData: null
            });
            this.updateCity(this.props.city);
        }
    }

    /*componentWillReceiveProps(nextProps) {
        console.log("UNSAFE componentWillReceiveProps");
        if(nextProps.city !== this.props.city) {
            this.setState({
                forecastData: null
            });
            this.updateCity(nextProps.city);
        }
    }*/
    

    updateCity = city => {
        const api_forecast = getUrlForecastByCity(city);
        fetch(api_forecast).then( response => (
            response.json()
        )).then( data => {
            const forecastData = transformForecast(data);
            this.setState({
                forecastData
            });
        });
    }
    

    renderForecastItemDays(forecastData) {
        return(forecastData.map((forecast) =>
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>
        ));
    }

    renderProgress() {
        return(<CircularProgress size={80}></CircularProgress>);
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {addSpaceString(city)}</h2>
                <hr></hr>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
