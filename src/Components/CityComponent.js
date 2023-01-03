import React, { Fragment } from 'react';
import "./CityComponent.css";

const CityComponent = (props) => {
    const { fetchWeather, updateCity } = props;
    return (
        <Fragment>
            <img className="weatherimg" src="https://images-eu.ssl-images-amazon.com/images/I/71s6O0FiiqL.png" alt="cloudy" />
            <span className="choosecity">Find Weather of your city</span>
            <form className="searchbox" onSubmit={fetchWeather}>
                <input placeholder="Enter your city" onChange={(e) => updateCity(e.target.value)} />
                <button>Search</button>
            </form>
        </Fragment>
    )
}

export default CityComponent
