
const { DateTime } = require("luxon");

export function getKeyFromHour(hour:number) {

    const zeroPad = (num:number, places:number) => String(num).padStart(places, '0');

    const key = `${zeroPad(hour, 2)}:00:00`;
    return key;
} 

export function isToday(date:string) { return DateTime.fromISO(date).toLocaleString() === DateTime.now().toLocaleString() };