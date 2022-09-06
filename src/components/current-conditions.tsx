import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';

const CurrentConditions: FunctionComponent<{ weather?: IWeatherDataDay }> = ({weather}) => {

    const zeroPad = (num:number, places:number) => String(num).padStart(places, '0')

    const date = new Date();
    const key = `${zeroPad(date.getHours(), 2)}:00:00`;
    const currentHour = weather?.hourly[key];

    return (
        <>        
        <span className="humidity">Humidity: <span className="font-semibold">{currentHour?.relative_humidity}%</span></span>
        <span className="wind">Wind: <span className="font-semibold">{Math.round(currentHour ? currentHour?.wind_speed : 0)} MPH {currentHour?.wind_direction}</span></span>
        </>
    );
}

export default CurrentConditions;