import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';

const DailyWeather: FunctionComponent<{ weather: IWeatherDataDay, type:string }> = ({weather, type}) => {
    const icon = `icons/${weather.icon}.svg`;

    return (
        <div className="weather-day">
            <div className="weekday text-center">{weather.weekday}</div>
            <div className="icon"><img src={icon} alt={weather.icon}></img></div>
            <div className="mintemp text-center">{type === 'fahrenheit' ? weather.min_temperature.fahrenheit : weather.min_temperature.celsius}°</div>
            <div className="maxtemp text-center">{type === 'fahrenheit' ? weather.max_temperature.fahrenheit : weather.max_temperature.celsius}°</div>
        </div>
    );
}

export default DailyWeather;