import React from 'react'
import './weather.css'
import search2_icon from '../assets/search2.png'
import weather_icon from '../assets/weather.png'
import cloudy1_icon from '../assets/cloudy1.png'
import rainyday_icon from '../assets/rainy-day.png'
import sun_icon from '../assets/sun.png'
import snow_icon from '../assets/snow.png'
import cloudy_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity1.png'
import wind_icon from '../assets/wind1.png'

const weather = () => {
  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search2_icon} alt=''/>
        </div>

        <img src={sun_icon} alt="" className='weather-icon' />
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>

        <div className='weather-data'>
            <div className='col'>
                <img src={humidity_icon} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Humidity</span>
                </div>
            </div>

            <div className='col'>
                <img src={wind_icon} alt="" />
                <div>
                    <p>3.6 Km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>

            
        </div>
      
    </div>
  )
}

export default weather
