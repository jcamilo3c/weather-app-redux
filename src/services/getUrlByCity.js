import {api_key, url_base_weather, url_base_forecast} from './../constants/api_url';

export const getUrlWeatherByCity = (city = 'Ny,usa') => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export const getUrlForecastByCity = (city = 'Ny,usa') => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}`;
}
