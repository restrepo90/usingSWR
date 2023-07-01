import { kelvinToCelsius } from "./kelvinToCelsius";


export const kelvinToFahrenheit = (kelvinDegrades) => {
    const celsius = kelvinToCelsius(kelvinDegrades)
    const fahrenheitConversion = 9/5;
    const fahrenheitInit = 32;
    return (celsius * fahrenheitConversion + fahrenheitInit).toFixed(2);
    
}