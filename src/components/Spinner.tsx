import React, { useState } from 'react'
import { ClockLoader } from 'react-spinners'

type Props = {
  loading:boolean,
  color:string
}

const Spinner = ({loading,color}: Props) => {
  return (
    <ClockLoader
      color={color}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Spinner
