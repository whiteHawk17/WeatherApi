
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


export default function WeatherApp(){

    const[weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 7.38,
        humidity:  81,
        temp : 8.05,
        tempMax: 8.05,
        tempMin: 8.05,
        weather: "fog"
    });

    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);

    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Vinay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}