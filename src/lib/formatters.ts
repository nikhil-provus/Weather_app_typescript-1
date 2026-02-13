import { WeatherData, Unit } from "../api/weather";

// The "Typed Object" your UI will use
export interface WeatherSummary {
  cityName: string;
  temp: string;
  feelsLike: string;
  condition: string;
  description: string;
  humidity: string;
  wind: string;
  icon: string;
  // Added this to fix the error in useWeather.ts
  coord: {
    lat: number;
    lon: number;
  };
}

export const formatWeatherSummary = (data: WeatherData, unit: Unit): WeatherSummary => {
  const isMetric = unit === Unit.Celsius;
  
  // Safely grab the first weather object or provide a fallback
  // This fixes the "Object is possibly undefined" error for data.weather[0]
  const weatherMain = data.weather?.[0] ?? { 
    main: "N/A", 
    description: "No data", 
    icon: "01d" 
  };

  return {
    cityName: data.name,
    temp: `${Math.round(data.main.temp)}°${isMetric ? "C" : "F"}`,
    feelsLike: `${Math.round(data.main.feels_like)}°${isMetric ? "C" : "F"}`,
    condition: weatherMain.main,
    description: weatherMain.description 
      ? weatherMain.description.charAt(0).toUpperCase() + weatherMain.description.slice(1)
      : "No description",
    humidity: `${data.main.humidity}%`,
    wind: `${data.wind.speed} ${isMetric ? "m/s" : "mph"}`,
    icon: `https://openweathermap.org/img/wn/${weatherMain.icon}@4x.png`,
    coord: data.coord // Now matches the interface above
  };
};