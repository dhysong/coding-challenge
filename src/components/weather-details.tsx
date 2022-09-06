import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';

const WeatherDetails: FunctionComponent<{ weather?: IWeatherDataDay, type: string, changeTemperatureType: Function }> = ({weather, type, changeTemperatureType}) => {

    return (
        <>        
        <div className="weather-title w-3/4">Partly Cloudy</div>
        <div className="weather-c-f w-1/4">
            <span className={type === 'celcius' ? "selected" : ''}  onClick={() => {changeTemperatureType('celcius')}}>°C</span>&nbsp;
            <span className={type === "fahrenheit" ? "selected" : ""} onClick={() => {changeTemperatureType('fahrenheit')}}>°F</span>
        </div>
        </>
    );
}

export default WeatherDetails;