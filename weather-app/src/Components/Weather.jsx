import React, { useEffect, useState, useRef } from 'react'
import './weather.css'
import search2_icon from '../assets/search2.png'
import weather_icon from '../assets/weather.png'
import rainyday_icon from '../assets/rainy-day.png'
import sun_icon from '../assets/sun.png'
import snow_icon from '../assets/snow.png'
import cloudy_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity1.png'
import wind_icon from '../assets/wind1.png'

const weather = () => {

    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": sun_icon,
        "01n": sun_icon,
        "02d": cloudy_icon,
        "02n": cloudy_icon,
        "03d": cloudy_icon,
        "03n": cloudy_icon,
        "04d": weather_icon,
        "04n": weather_icon,
        "09d": rainyday_icon,
        "09n": rainyday_icon,
        "10d": rainyday_icon,
        "10n": rainyday_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const search = async (city)=>{
        if(city===""){
            alert("Enter City Name!");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon] || sun_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) { 
            setWeatherData(false);
            console.error('error fetching weather data:',error)
    }
}

useEffect(()=>{
    search("");
},[])

  return (

    <div className='weather'>
        <div className='search-bar'>
            <input ref={inputRef} type='text' placeholder='Search'/>
            <img src={search2_icon} alt='' onClick={()=>search(inputRef.current.value)}/>
        </div>

        {weatherData?<>

            <img src={weatherData.icon} alt="" className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>

        <div className='weather-data'>
            <div className='col'>
                <img src={humidity_icon} alt="" />
                <div>
                    <p>{weatherData.humidity}</p>
                    <span>Humidity</span>
                </div>
            </div>

            <div className='col'>
                <img src={wind_icon} alt="" />
                <div>
                    <p>{weatherData.windSpeed} Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>

        </>:<></>}

    </div>
  )
}

export default weather
