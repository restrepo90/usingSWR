const conversion = 273.15;
export const kelvinToCelsius = (kelvinDegrades) =>{
    return (kelvinDegrades - conversion).toFixed(2);

}