import axios from "axios";
import weatherCodes from '../../data/weatherCodes.json'
import { useEffect, useState } from "react";

function Weather() {
    const [temp, setTemp] = useState('');
    const [code, setCode] = useState(0);
    const weatherDesc = weatherCodes[code] || 'WeatherCode not Found';
    useEffect(() => {
        try {
            async function fecthWeatherApi 
            () {
                const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-34&longitude=-64&hourly=temperature_2m&current=temperature_2m,weather_code&timezone=America%2FSao_Paulo&forecast_days=1');
                const currentWeather = response.data.current;
                setTemp(currentWeather.temperature_2m);
                setCode(currentWeather.weather_code);
            }

            fecthWeatherApi();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return(
        <>
            <h1>Weather</h1>
            <section>
                <h3>Temp: {temp}</h3>
                <p>Status: {weatherDesc}</p>
            </section>
        </>
    )
}

export default Weather