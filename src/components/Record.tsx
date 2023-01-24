import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface History{
  city: String,
  info: String
}
export default function Record() {
  const [data, setData] = useState<History[]>([])
  useEffect(()=>{
    getData();
  })
  const getData = async() =>{
    const res = await axios.get("https://localhost:44301/api/values/history")
    setData(res.data);
  }
  return (
    <div className='m-5 grid grid-cols-1 gap-4'>
      {
        data.map(e=>(
          <div className='bg-gray-400 p-2 rounded-md inline-block w-[8%]'>
            <h2 className='text-gray-800'>city: {e.city}</h2>
            <p className='text-white'>info: {e.info}</p>
          </div>
        ))
      }
    </div>
  )
}
