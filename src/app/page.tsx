'use client'
import Weather from "@/components/Weather";
import CardWeather from "@/components/card-weather";
import { ForecastResponse, WeatherResponse } from "@/types";
import { getForecastByCoordinatesService, getForecastByLocationService, getWeatherByCoordinatesService, getWeatherByLocationService } from "@/utils/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdGpsFixed } from "react-icons/md";
import weatherdata from '../data/weather.json';
import Forecast from "@/components/Forecast";
export default function Home() {

  const [city, setCity] = useState("dhaka");
  const [weatherData, setWeatherData] = useState<WeatherResponse|null>(null);
  const [forcastData, setForcastData] = useState<ForecastResponse|null>(null);


  const handleCityUpdate=async()=>{
    setWeatherData(await getWeatherByLocationService(city));
    setForcastData(await getForecastByLocationService(city));
  }
  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      handleCityUpdate();
    }
  };






  const handleGPSUpdate = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setWeatherData(await getWeatherByCoordinatesService(latitude, longitude));
        setForcastData(await getForecastByCoordinatesService(latitude, longitude));
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    const init = async () => {
      setWeatherData(await getWeatherByLocationService(city));
      setForcastData(await getForecastByLocationService(city));

      // setWeatherData(weatherdata);
    };
    init();
  }, []);

  // if(!weatherData)return null;
  console.log(weatherData);
  return (
    <main className="flex min-h-screen flex-col lg:flex-row bg-slate-900 p-10 justify-center items-center ">
      <section className="h-full flex flex-col items-between weather lg:w-1/2 w-full flex-grow">
        <div className="search-bar flex flex-row my-6">
          <input type="text" placeholder="Search for city" 
            className="bg-slate-800 focus:ring-0 focus:outline-none p-3 outline-slate-400 rounded-sm w-1/2"  
            onChange={(e)=>setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="bg-green-700 p-4 mx-2 rounded-sm" onClick={handleCityUpdate}><BiSearch/></button>
          <button className="bg-green-700 p-4 mx-2 rounded-sm" onClick={handleGPSUpdate}><MdGpsFixed/></button>
        </div>
        <Weather data={weatherData}/>
      </section>
      <section className="w-full lg:w-1/2 flex-grow">
        <Forecast data={forcastData}/>
      </section>
    </main>
  );
}
