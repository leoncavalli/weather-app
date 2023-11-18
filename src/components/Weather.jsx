import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
export default function Weather({city})
{
    const API_KEY = '84e9ed320366434383b120154231811';
    
    const [data,setData] =useState(null);
    useEffect(()=>{
       const fetchData = async () =>
        {
            try
            {   
                const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no` 
                const response = await axios.get(apiUrl);
                setData(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        if(city){
            fetchData()
        }

    },[city])
    

   

    return (      
           <div className="box">
            {data && <><h2>{data.location?.name}</h2>
                <p>{data.current.condition.text}<img src={data.current.condition.icon} alt="" /></p>
                <h1>{data.current.temp_c}°C</h1></>}
                <p>Humidity : {data.current.humidity}</p>
           </div> 
    )

}