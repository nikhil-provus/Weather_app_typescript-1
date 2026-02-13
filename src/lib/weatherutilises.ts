// src/utils/weatherUtils.ts

export const getWMOIcon = (code: string) => {
    // 1. Check which code the API sent us (Open Console to see this!)
    console.log("Weather Code Received:", code);
  
    const mapping: Record<string, string> = {
      // Clear Sky
      "01d": "https://worldweather.wmo.int/images/24.png", // Sunny
      "01n": "https://worldweather.wmo.int/images/25.png", // Clear Night
      
      // Clouds
      "02d": "https://worldweather.wmo.int/images/22.png", // Partly Cloudy
      "02n": "https://worldweather.wmo.int/images/23.png",
      "03d": "https://worldweather.wmo.int/images/21.png", // Cloudy
      "03n": "https://worldweather.wmo.int/images/21.png",
      "04d": "https://worldweather.wmo.int/images/21.png", // Overcast
      "04n": "https://worldweather.wmo.int/images/21.png",
  
      // Rain
      "09d": "https://worldweather.wmo.int/images/13.png", // Showers
      "09n": "https://worldweather.wmo.int/images/13.png",
      "10d": "https://worldweather.wmo.int/images/8.png",  // Rain
      "10n": "https://worldweather.wmo.int/images/8.png",
      "11d": "https://worldweather.wmo.int/images/2.png",  // Thunderstorm
      "11n": "https://worldweather.wmo.int/images/2.png",
  
      // Snow
      "13d": "https://worldweather.wmo.int/images/16.png", // Snow
      "13n": "https://worldweather.wmo.int/images/16.png",
  
      // Atmosphere (Fog/Mist/Haze)
      "50d": "https://worldweather.wmo.int/images/18.png", // Fog
      "50n": "https://worldweather.wmo.int/images/18.png",
    };
  
    // 2. Try to find the cartoon icon
    const wmoIcon = mapping[code];
  
    // 3. SAFETY NET: If we have the cartoon, use it. 
    // If not, fall back to the reliable OpenWeather icon so it never breaks.
    return wmoIcon || `https://openweathermap.org/img/wn/${code}@4x.png`;
  };