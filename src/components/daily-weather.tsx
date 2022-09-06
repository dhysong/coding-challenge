import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';

const DailyWeather: FunctionComponent<{ weather: IWeatherDataDay }> = ({weather}) => {
    const icon = `icons/${weather.icon}.svg`;

    return (
        <div className="weather-day">
            <div className="weekday text-center">{weather.weekday}</div>
            <div className="icon"><img src={icon} alt={weather.icon}></img></div>
            <div className="mintemp text-center">{weather.min_temperature.fahrenheit}°</div>
            <div className="maxtemp text-center">{weather.max_temperature.fahrenheit}°</div>
        </div>
    );
}

export default DailyWeather;