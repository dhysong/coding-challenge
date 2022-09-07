import React, { FunctionComponent } from 'react';
import { IDailyWeatherReport, IWeatherDataDay } from '../types';
import { getKeyFromHour, isToday } from '../utility';

const HourlyWeatherReport: FunctionComponent<{ currentDate:string, hourlyWeather?: IWeatherDataDay[], type: string }> = ({currentDate, hourlyWeather, type}) => {
    if(!hourlyWeather || hourlyWeather.length === 0 || hourlyWeather[0] == null || hourlyWeather[0].hourly === null) {
        return <></>;
    }

    let hourMap: IDailyWeatherReport = {};    
    const date = new Date();
    const startHour = isToday(currentDate)  ? date.getHours() : 2;

    const hourCount:number = 8;
    for (let i = 0; i < hourCount; i++) {
        let hour = startHour + (i * 3);
        let key = getKeyFromHour(hour);
        if(hour <= 24) {
            if(hourlyWeather[0].hourly.hasOwnProperty(key)) {
                hourMap[key] = null;
            }
        }
        else {
            hour = hour % 24;
            key = getKeyFromHour(hour);
            if(hourlyWeather[1].hourly.hasOwnProperty(key)) {
                hourMap[key] = null;
            }
        }

    }

    Object.keys(hourlyWeather[0].hourly).map(key => {
        if(hourMap.hasOwnProperty(key)) {
            (hourMap as any)[key] = hourlyWeather[0].hourly[key];
        }   
        return true;
    });

    const formatHour = (text:string) => {
        const hour = parseInt(text.split(':')[0]);        
        return hour > 12 ? (hour - 12) + ' PM' : hour + ' AM';
    };

    return (
        <>
        {
            Object.keys(hourMap).map(key => {
                const hour = hourlyWeather[0].hourly[key];
                const icon = `icons/${hour.icon}.svg`;
                return (
                    <div key={key} className="details text-center">
                        <div className="hour">{formatHour(key)}</div>
                        <div className="icon"><img src={icon} alt={hour.icon}></img></div>
                        <div className="temperature">{type === 'fahrenheit' ? hour.temperature.fahrenheit : hour.temperature.celsius}°</div>
                    </div>
                );
            })
        }
        </>
    );
}

export default HourlyWeatherReport;

