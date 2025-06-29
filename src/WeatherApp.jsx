import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
   let [weatherInfo, setWeatherInfo] = useState({
      city: "Delhi",
      feelsLike: 36.31,
      humidity: 37,
      temp: 34.97,
      tempMAX: 34.97,
      tempMIN: 34.97,
      weather: "overcast clouds",
   });

   let updateInfo = (newInfo) =>{
      setWeatherInfo(newInfo);
   }
   return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App by Ali</h2>
        <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
    </div>
   )
}