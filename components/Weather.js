"use client"

import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react"

export default function Weather({ staticTemp = null }) {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const latitude = 50.6339;
    const longitude = 3.0551;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const params = {
                    latitude: latitude,
                    longitude: longitude,
                    current: ["temperature_2m", "is_day", "weather_code", "apparent_temperature"],
                    forecast_days: 1,
                };
                const url = "https://api.open-meteo.com/v1/forecast";

                const responses = await fetchWeatherApi(url, params);
                const response = responses[0];
                const current = response.current();
                const utcOffsetSeconds = response.utcOffsetSeconds();

                setWeatherData({
                    current: {
                        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                        temperature_2m: current.variables(0).value(),
                        is_day: current.variables(1).value(),
                        weather_code: current.variables(2).value(),
                        apparent_temperature: current.variables(3).value(),
                    },
                });

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, []);

    if (staticTemp !== null) {
        return (
            <div>
                <p className="text-8xl font-semibold">{staticTemp}°</p>
                <p>À l&apos;extérieur</p>
            </div>
        )
    }

    const temperature = Math.round(weatherData?.current.temperature_2m || 0);

    if (loading) {
        return <div>Chargement des données météo...</div>
    }

    if (error) {
        return <div>Erreur météo: {error}</div>
    }

    return (
        <div>
            <p className="text-8xl font-semibold">{temperature}°</p>
            <p>À l&apos;extérieur</p>
        </div>
    )
}