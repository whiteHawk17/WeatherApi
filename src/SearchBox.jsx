import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const Api_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6f93f8fb3d24f0dfce9af5fd87a087dc";

    let getWeatherInfo=async ()=>{
        try{
            let res=await fetch(`${Api_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes=await res.json();
            
            let result={
                city:city,
                temp:jsonRes.main.temp,
                tempMin:jsonRes.main.temp_min,
                tempMax:jsonRes.main.temp_max,
                humidity:jsonRes.main.humidity,
                feelsLike:jsonRes.main.feels_like,
                weather:jsonRes.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
       
    }

   

    let handleChange=(e)=>{
        setCity(e.target.value);
    }

    let handleSubmit=async (e)=>{
        try{e.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true);

        }

    }

    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField 
                id="city" 
                label="City-name" 
                variant="outlined" 
                required 
                onChange={handleChange} 
                value={city} />
            <br></br>
            <br></br>
            <Button 
                variant="contained" 
                type="submit">
                    Search
            </Button>
            {error && <p style={{color:"red"}}>Sorry bro yeh place nhi janta m</p>}
            </form>
        </div>
    )
}







