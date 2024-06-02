import { splitStringAtFirstSpace } from '@/utils/helper';
import React from 'react'
import { format, parseISO } from 'date-fns';
import { getIconLink } from '@/utils/services';
type Props = {
  summary: string;
  temperature: number;
  dateAndTime: string;
  icon:string;
}

const CardForecast = ({icon,summary,temperature,dateAndTime}: Props) => {
  const [firstHalf, secondHalf] = splitStringAtFirstSpace(dateAndTime);
  const time = format(parseISO(dateAndTime), 'h a');

  return (
    <div className="flex justify-between items-center px-3 w-full py-2 border border-slate-700 h-[150px]">
      <div className="flex flex-col justify-between items-center">
        
        <img src={getIconLink(icon)}/>
        
        <span className="text-base">{time}</span>
      </div>
      <div className="my-auto flex justify-between items-center gap-3 flex-col">
        <h1>{temperature}°C</h1>
        <h4>{summary}</h4>
      </div>
    </div>
  );
}

export default CardForecast;
