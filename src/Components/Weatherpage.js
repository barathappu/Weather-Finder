import React, { Fragment } from 'react';
import './Weatherpage.css';
import '../icons/cloudy-night.svg';

const WeatherIcons = {
    "01d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/sunny.svg",
    "01n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/night.svg",
    "02d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/day.svg",
    "02n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/cloudy-night.svg",
    "03d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/cloudy.svg",
    "03n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/cloudy.svg",
    "04d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/perfect-day.svg",
    "04n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/cloudy-night.svg",
    "09d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/rain.svg",
    "09n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/rain-night.svg",
    "10d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/rain.svg",
    "10n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/rain-night.svg",
    "11d": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/storm.svg",
    "11n": "https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/storm.svg",
};

const InfoContainer = (props) => {
    const { name, img, value } = props;

    return (
        <div className="infocontainer">
            <img alt="img" className='infoicon' src={img} />
            <span className='infolabel'>{value}<span> {name}</span></span>
        </div>
    )
}

const Weatherpage = (props) => {

    const { weather } = props;
    const isDay = weather?.weather[0].icon.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <Fragment>
            <div className='weathercontainer'>
                <span className='condition'>{`${Math.floor(weather.main.temp - 273)}°C`}<span></span>{` | ${weather.weather[0].description}`}</span>
                <img alt='cloudy' src={WeatherIcons[weather.weather[0].icon]}></img>
            </div>
            <span className='location'>{`${weather.name},${weather.sys.country}`}</span>
            <span className='weatherinfo'>Weather Info</span>
            <div className="weatherinfocontainer">
                <InfoContainer name={isDay ? "Sunset" : "Sunrise"} value={`${getTime(weather.sys[isDay ? "sunset" : "sunrise"])}`}
                    img={isDay ?
                        ("https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/night.svg")
                        : ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTF_cR7nqG9Z2AnBpxJVobnpiL4a6kRnAFeA&usqp=CAU')}
                />
                <InfoContainer name="Humidity" value={weather.main.humidity}
                    img="https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/humidity.svg" />
                <InfoContainer name='Wind' value={weather.wind.speed}
                    img="https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/wind.svg" />
                <InfoContainer name="Pressure" value={weather.main.pressure}
                    img="https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/pressure.svg" />
            </div>
            <a href="./CityComponent">Go to Homepage</a>
        </Fragment>
    )
}

export default Weatherpage
