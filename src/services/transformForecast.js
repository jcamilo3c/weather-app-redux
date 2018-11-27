import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data => (
    data.list.filter(item => {
        const unix_dt = moment.unix(item.dt).utc().hour();
        return unix_dt === 6 || unix_dt === 12 || unix_dt === 18
    }).map(item => (
        {
            weekDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForecast;
