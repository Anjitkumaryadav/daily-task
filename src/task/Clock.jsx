import React, { useEffect, useState } from 'react'

function Clock() {

    const [count, setCount] = useState();

useEffect(()=>{
  setInterval(()=>{
    const timeObject = new Date()
    const hour = timeObject.getHours()
    const minute = timeObject.getMinutes()
    const second = timeObject.getSeconds()
    const time = hour + ":"+minute +":"+second;
    setCount(time)
    console.log(time)
  },1000)
},[])
  return (
    <div>

<div className='flex items-center bg-gray-500 justify-center w-screen h-screen'>
        <h1 className='text-5xl mr-2 text-white'>Time:</h1>
        <h1 className='text-4xl text-white border rounded-md bg-gray-800 py-3 px-5'> {count}</h1>
      </div>

    </div>
  )
}

export default Clock