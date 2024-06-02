import Image from 'next/image';
import React from 'react'

type Props = {
  imgSrc:string,
  title:string,
  value:string
}

const CardWeather =  ({ imgSrc, title, value }: Props) => {
  return (
    <div className="flex p-5 py-6 bg-slate-950 rounded-md items-center justify-start space-x-8 w-full">
      <Image src={imgSrc} width={48} height={48} alt={`${title}-icon`} />
      <div className="flex justify-end flex-col">
        <h1 className='text-2xl font-bold text-gray-300 mb-2'>{title}</h1>
        <p className='text-sm text-gray-400'>{value}</p>
      </div>
    </div>
  )
}

export default CardWeather;
