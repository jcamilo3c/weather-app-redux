import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
} from './../constants/weathers';

const getTemp = kelvin => (
    Number(convert(kelvin).from("K").to("C").toFixed(0))
)

const getWeatherState = weather => {
    const {id} = weather;
    let icon = null;
    switch(true) {
        case (id < 300):
            icon = THUNDER;
            break;
        case (id < 400):
            icon = DRIZZLE;
            break;
        case (id < 600):
            icon = RAIN;
            break;
        case (id < 700):
            icon = SNOW;
            break;
        case (id < 800):
            icon = WINDY;
            break;
        case (id === 800):
            icon = SUN;
            break;
        default:
            icon = CLOUD;
            break;
    }
    
    return icon;
}

const transformWeather = weather_data => {
    const {temp, humidity} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        temperature,
        humidity,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;
