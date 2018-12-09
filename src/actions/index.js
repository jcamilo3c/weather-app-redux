import {getUrlForecastByCity} from './../services/getUrlByCity';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ // actionCreator
    type: SET_CITY, // action name
    payload // value
});
const setForecastData = payload => ({
    type: SET_FORECAST_DATA,
    payload
});

export const setSelectedCity = payload => {
    return dispatch => {
        const api_forecast = getUrlForecastByCity(payload);

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(api_forecast).then( response => (
            response.json()
        )).then( data => {
            const forecastData = transformForecast(data);
            console.log(forecastData);

            // modificar el estado con el resultado de la promesa (fetch)
            dispatch(setForecastData({
                city: payload,
                forecastData
            }));
        });
    }
}; 
