import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getUrlWeatherByCity} from './../../services/getUrlByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/*
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Miami"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
*/
class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.props.city);
        fetch(api_weather).then( response => {
            console.log(response);
            return response.json();
        }).then( data => {
            const actualWeather = transformWeather(data);
            this.setState({
                data: actualWeather
            });
        }); 
    }

    render() {
        console.log("render");
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/> }
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;
