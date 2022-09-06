import React, { FunctionComponent } from 'react';
import { IDailyWeatherReport } from '../types';
import DailyWeather from './daily-weather';

const DailyWeatherReport: FunctionComponent<{ dailyWeather: IDailyWeatherReport, type: string }> = ({dailyWeather, type}) => {
    return (
        <>
            {
                Object.keys(dailyWeather).map(key => {
                    const dayWeather = dailyWeather[key];
                    return <DailyWeather key={key} weather={dayWeather} type={type}></DailyWeather>
                })
            }
        </>
    );
}

export default DailyWeatherReport;