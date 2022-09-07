import React, { FunctionComponent, useState } from 'react';
import { IDailyWeatherReport } from '../types';
import DailyWeather from './daily-weather';

const DailyWeatherReport: FunctionComponent<{ dailyWeather: IDailyWeatherReport, type: string, onDailyWeatherClick:Function }> = ({dailyWeather, type, onDailyWeatherClick}) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);

    const dailyWeatherClick = (index:any, date:string) => {
        setSelectedIndex(index);
        onDailyWeatherClick(date);
    };
    
    return (
        <>
            {
                Object.keys(dailyWeather).map((key, idx) => {
                    const dayWeather = dailyWeather[key];
                    return <DailyWeather index={idx} selected={idx === selectedIndex} date={key} onDailyWeatherClick={dailyWeatherClick} key={key} weather={dayWeather} type={type}></DailyWeather>
                })
            }
        </>
    );
}

export default DailyWeatherReport;