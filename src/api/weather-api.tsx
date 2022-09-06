import { IWeatherReport } from "../types";

export async function GetWeather(position: any) : Promise<IWeatherReport>  {   
    const url = `https://floral-paper-1590.fly.dev/?latitude=${position.lat}&longitude=${position.lng}&transform=true`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}