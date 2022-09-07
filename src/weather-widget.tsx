import React, { FunctionComponent, useState, useEffect } from 'react';
import './App.css';
import DailyWeatherReport from './components/daily-weather-report';
import HourlyWeatherReport from './components/hourly-weather-report';
import CurrentConditions from './components/current-conditions';
import { IWeatherDataDay, IWeatherReport } from './types'; 
import { isToday } from './utility';

const WeatherWidget: FunctionComponent<{ weather: IWeatherReport }> = ({ weather }) => {

    const [type, setType] = useState('fahrenheit');
    const [currentDate, setCurrentDate] = useState('');
    const [currentWeather, setCurrentWeather] = useState<IWeatherDataDay[]>();

    const changeTemperatureType = (type:string) => {
        setType(type);
    };

    const changeHourlyWeather = (date:string)=> {
        const keys = Object.keys(weather.daily);   
        setCurrentDate(date);
        const currentWeather = isToday(date) ? [weather.daily[keys[0]], weather.daily[keys[1]]] : [weather.daily[date]];
        setCurrentWeather(currentWeather);
    }

    useEffect(() => {
        const keys = Object.keys(weather.daily);   
        setCurrentDate(keys[0]);
        setCurrentWeather([weather.daily[keys[0]], weather.daily[keys[1]]]);
    }, [weather]);

    if (weather.daily.length === 0) {
        return (
            <div className="place-content-center text-center">
                <img className="loading" src="./icons/loading.gif" alt="loading"></img>
            </div>
        );
    }

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
                        <HourlyWeatherReport currentDate={currentDate} type={type} hourlyWeather={currentWeather}></HourlyWeatherReport>
                    </div>
                    <div className="weather-conditions">
                        <CurrentConditions weather={currentWeather}></CurrentConditions>
                    </div>
                </div>
                <div className="weather-days flex">
                    <DailyWeatherReport onDailyWeatherClick={changeHourlyWeather} type={type} dailyWeather={weather?.daily}></DailyWeatherReport>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget;