import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';
import { getKeyFromHour } from '../utility';

const CurrentConditions: FunctionComponent<{ weather?: IWeatherDataDay[] }> = ({weather}) => {

    const date = new Date();
    const key = getKeyFromHour(date.getHours());
    const currentHour = weather && weather[0] && weather[0].hourly ? weather[0].hourly[key] : null;

    return (
        <>        
        <span className="humidity">Humidity: <span className="font-semibold">{currentHour?.relative_humidity}%</span></span>
        <span className="wind">Wind: <span className="font-semibold">{Math.round(currentHour ? currentHour?.wind_speed : 0)} MPH {currentHour?.wind_direction}</span></span>
        </>
    );
}

export default CurrentConditions;