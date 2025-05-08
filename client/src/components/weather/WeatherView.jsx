import axios from "axios";
import '../../css/weather.css'
import weatherCodes from '../../data/weatherCodes.json'
import { useEffect, useState } from "react";

function Weather() {
    const [temp, setTemp] = useState('');
    const [code, setCode] = useState(0);
    const weatherDesc = weatherCodes[code] || 'WeatherCode not Found';
    // Excecute the API-Call once
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

    return (
        <>
            <section className="weather">
                <section className="weatherData">
                    <h1 className="weatherTitle">Current weather in Argentina</h1>
                    <img src="/icons/argFlag.svg" alt="" />
                    <h3>Temp: {temp}</h3>
                    <p>{weatherDesc}<br />Data from <a href="https://open-meteo.com/" target="_blank">Open Meteo API</a></p>
                </section>
            </section>
        </>
    )
}

export default Weather