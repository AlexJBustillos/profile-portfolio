import React, { useState } from 'react'
import axios from 'axios'
import WeatherResult from './WeatherResult'

function Weather() {
    // TODO Verify zip is actually a zip
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // We will call the api using axios
        let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(result => {
            // Set some state
            setWeather(result.data)
        })
        .catch(err => {
            console.log(err);
        })
    }
     // conditionally render a weather result componenet

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find weather in your area in the US</h1>
                {weather ? <WeatherResult weather={weather}/> : null}
                <label htmlFor='zip'>Zipcode: </label>
                <input type="text" name="zip" id="zip" onChange={e => setZip(e.target.value)}
                />
                <input type="submit" value="Find Weather"/>
            </form>
        </div>
    )
}

export default Weather

//Example
// let name = 'Alex'
// name === 'Pete' ? false : true