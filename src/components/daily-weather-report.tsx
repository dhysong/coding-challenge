import React, { FunctionComponent } from 'react';
import { IDailyWeatherReport } from '../types';
import DailyWeather from './daily-weather';

const DailyWeatherReport: FunctionComponent<{ dailyWeather: IDailyWeatherReport }> = ({dailyWeather}) => {
    return (
        <>
            {
                Object.keys(dailyWeather).map(key => {
                    const dayWeather = dailyWeather[key];
                    return <DailyWeather key={key} weather={dayWeather}></DailyWeather>
                })
            }
        </>
    );
}

export default DailyWeatherReport;