import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import { useRef } from 'react';

export default function Weather({city})
{

    const timerRef = useRef(null);

    const API_KEY = import.meta.env.VITE_WEATHER_API;
    const [data,setData] =useState(null);
    

    const fetchWeather = async () =>
        {
            clearTimeout(timerRef .current);

            try
            {   
                timerRef.current = setTimeout(async () => {
                const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no` 
                const response = await axios.get(apiUrl);
                console.log(response.data);
                setData(response.data);
            },1000)
            }
            catch(error){
                console.log(error);
            }
    }



    useEffect(()=>{
        if(city){
           fetchWeather();
        }
    },[city])
   

    return (      
           <div className="box">
            {data && <><h2>{data.location?.name}</h2>
                <p>{data.current.condition.text}<img src={data.current.condition.icon} alt="" /></p>
                <h1>{data.current.temp_c}°C</h1>
                <p>Humidity : {data.current.humidity}</p></>
               }
                
           </div> 
    )

}