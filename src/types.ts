
export interface ITemperature {
    fahrenheit: number,
    celsius: number
}


export interface IWeatherDataDay {
    hourly: IHourlyWeatherReport,
    icon: string,
    max_temperature: ITemperature,
    min_temperature: ITemperature,
    weather: string,
    weathercode: number,
    weekday: string
}

export interface IDailyWeatherReport {
    [key: string]: IWeatherDataDay
}

export interface IWeatherReport {
    daily: any,
    latitude: number,
    longitude: number
}

export interface IWeatherDataHour {
    icon: string,
    relative_humidity: number,
    temperature: ITemperature,
    weather: string,
    weathercode: number,
    wind_direction: string,
    wind_speed: number
}

export interface IHourlyWeatherReport {
    [key: string]: IWeatherDataHour
}