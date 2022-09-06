import React, { FunctionComponent } from 'react';
import { IWeatherDataDay } from '../types';

const HourlyWeatherReport: FunctionComponent<{ hourlyWeather?: IWeatherDataDay, type: string }> = ({hourlyWeather, type}) => {
    if(!hourlyWeather || !hourlyWeather.hourly) {
        return <></>;
    }

    const hourMap: object = {
        "11:00:00": null,
        "14:00:00": null,
        "17:00:00": null,
        "20:00:00": null,
        "23:00:00": null,
        "02:00:00": null,
        "05:00:00": null,
        "08:00:00": null,
    };

    Object.keys(hourlyWeather.hourly).map(key => {
        if(hourMap.hasOwnProperty(key)) {
            (hourMap as any)[key] = hourlyWeather.hourly[key];
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
                const hour = hourlyWeather.hourly[key];
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