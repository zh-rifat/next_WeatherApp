import { ForecastResponse } from '@/types'
import React from 'react'
import CardForecast from './card-forecast'
import { format, parseISO } from 'date-fns';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
type Props = {
  data:ForecastResponse|null
}

interface ForecastItem {
  main: {
    temp: number;
  };
  weather: [
    {
      main: string;
      icon:string;
    }
  ];
  dt_txt: string;
}
type GroupedData = {
  [date: string]: ForecastItem[];
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
const Forecast = ({data}: Props) => {


  if(!data)return null;

  const groupedData:GroupedData = data.list.reduce((acc:any, item:any) => {
    const date = format(parseISO(item.dt_txt.split(' ')[0]), 'EEEE, MMMM d');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});
  return (
    <div className="flex flex-col gap-2 px-3 mt-4 w-full">
        <h1 className="text-slate-400 text-3xl font-bold my-6">Weather Forecast</h1>
        <div className=" overflow-y-scroll  rounded-md  border border-slate-400 max-h-[700px] scrollbar-hide">
        
        {Object.entries(groupedData).map(([date, items]) => (
          <div key={date} className='px-1 py-4 border-slate-950'>
            <h2 className='p-3 text-slate-500'>{date}</h2>
            <Carousel responsive={responsive}>
              {items.map((item: ForecastItem) => (
                <CardForecast
                  temperature={item.main.temp}
                  summary={item.weather[0].main}
                  icon={item.weather[0].icon}
                  dateAndTime={item.dt_txt}
                  key={item.dt_txt}
                />
              ))}
            </Carousel>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Forecast
