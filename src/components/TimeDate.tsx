'use client'

import React, { use, useEffect, useState } from 'react'

type Props = {}

const TimeDate=({}: Props)=> {

  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toDateString());
    }, 1000);
    return () => clearInterval(interval);
  },[time])
  return (
    <div>
      <h3 className='text-gray-400 md:text-lg text-sm'>{time}</h3>
      <h3 className='text-gray-400 md:text-lg text-sm'>{date}</h3>
    </div>
  )
}

export default TimeDate;
