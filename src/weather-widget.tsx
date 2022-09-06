import React, { FunctionComponent, useState } from 'react';
import './App.css';
import DailyWeatherReport from './components/daily-weather-report';
import HourlyWeatherReport from './components/hourly-weather-report';
import CurrentConditions from './components/current-conditions';
import { IWeatherDataDay, IWeatherReport } from './types'; 

const WeatherWidget: FunctionComponent<{ weather: IWeatherReport, currentDay?: IWeatherDataDay }> = ({ weather, currentDay }) => {

    const [type, setType] = useState('fahrenheit');

    if (weather.daily.length === 0) {
        return (
            <div className="place-content-center text-center">
                <img className="loading" src="./icons/loading.gif" alt="loading"></img>
            </div>
        );
    }

    const changeTemperatureType = (type:string) => {
        setType(type);
    };

    return (
        <div className="place-content-center">
            <div className="weather-widget mx-auto bg-white items-center">
                <div className="weather-details">
                    <div className="flex">
                        <div className="weather-title w-3/4">Partly Cloudy</div>
                        <div className="weather-c-f w-1/4">
                            <span className={type === 'celcius' ? "selected" : ''}  onClick={() => {changeTemperatureType('celcius')}}>°C</span>&nbsp;
                            <span className={type === 'fahrenheit' ? "selected" : ''} onClick={() => {changeTemperatureType('fahrenheit')}}>°F</span>
                        </div>
                    </div>
                    <div className="weather-location">Atlanta, GA</div>
                    <div className="weather-hourly flex">
                        <HourlyWeatherReport type={type} hourlyWeather={currentDay}></HourlyWeatherReport>
                    </div>
                    <div className="weather-conditions">
                        <CurrentConditions weather={currentDay}></CurrentConditions>
                    </div>
                </div>
                <div className="weather-days flex">
                    <DailyWeatherReport type={type} dailyWeather={weather?.daily}></DailyWeatherReport>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget;