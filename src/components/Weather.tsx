import { WeatherResponse } from '@/types'
import { formatTime } from '@/utils/helper'
import { getIconLink } from '@/utils/services'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { WiDegrees } from 'react-icons/wi'
import CardWeather from './card-weather'
import TimeDate from './TimeDate'

type Props = {
  data:WeatherResponse|null
}

const Weather = ({data}: Props) => {
  if(!data)return null;

  const weatherCardArray = [
    {
      title: "Sunrise",
      imgSrc: "/weather/sunrise.svg",
      value: `${formatTime(data?.sys?.sunrise)}`,
    },
    {
      title: "Sunset",
      imgSrc: "/weather/sunset.svg",
      value: `${formatTime(data?.sys?.sunset)}`,
    },
    {
      title: "Wind",
      imgSrc: "/weather/wind.svg",
      value: `${data?.wind?.speed} km/h`,
    },
    {
      title: "Humidity",
      imgSrc: "/weather/humidity.svg",
      value: `${data?.main?.humidity} %`,
    },
    {
      title: "Feels Like",
      imgSrc: "/weather/feels.svg",
      value: `${data?.main?.feels_like} °C`,
    },
    {
      title: "Visibility",
      imgSrc: "/weather/visibility.svg",
      value: `${data.visibility} km`,
    },
  ];
  return (
    <>
      <div className='bg-slate-950 md:p-10 p-5 py-20 rounded-md text-gray-300 flex flex-row items-center'>
        <div>
          <h1 className='text-3xl md:text-5xl font-bold'>{data?.name}, {data?.sys.country}</h1>
          <h3 className='text-xl text-gray-400'>{data?.weather[0].main}</h3>
          <h2 className='text-2xl md:text-4xl font-bold mt-16'>{data?.main.temp}&deg;C</h2> 
          <div className='mt-6'/>
          <TimeDate/>
        </div>
        <div className='ml-auto'>
          <img src={getIconLink(data?.weather[0].icon)}/>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 my-3">
        {
        weatherCardArray.map((card) => (
              <CardWeather
                title={card.title}
                imgSrc={card.imgSrc}
                value={card.value}
                key={card.title}
              />
        ))}
      </div>
    </>
  )
}

export default Weather
