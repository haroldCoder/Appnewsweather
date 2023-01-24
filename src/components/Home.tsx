import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState<any>([]);
    const [city, setCity] = useState<string>("");
    const [showNews, setShow] = useState(false);
    const [country, setCountry] = useState<string>('');

    const getData = async () =>{
        const res = await axios.get(`https://localhost:44301/api/values?city=${city}&country=${country}`);
        setData(res.data);
        await axios.post("https://localhost:44301/api/values/history",{
            "city": city,
            "info": "info"
        }).then((e)=>console.log(e))
    }
    
  return (
    <main className='px-10 py-8'>
        <div className='flex justify-around'>
        <form className='bg-[#00000050] w-[25%] h-[60vh] rounded-md px-6 pt-14'>
            <div>
                <label htmlFor="city" className='font-semibold text-gray-600'>Name of city *</label>
                <input type="text" id="city" className='mt-3 w-[100%] rounded-md h-8 p-2' onChange={(e)=>setCity(e.target.value)} />  
            </div>
            <div className='mt-10'>
                <label htmlFor="country" className='font-semibold text-gray-600'>Country</label>
                <input type="text" id='country' className='mt-3 w-[100%] rounded-md h-8 p-2'/>
            </div>
            <div className='relative top-[43%] flex justify-end'>
                <button className='bg-blue-600 w-40 p-2 rounded-lg text-white cursor-pointer' onClick={(e)=>{e.preventDefault(),getData()}}>Search</button>
            </div>
        </form>
            {
                data.length != 0 ? 
                <div className='w-[40%]'>
                    <div className='flex justify-between py-1 px-4 border-b-[1px] border-gray-300'>
                        <div className='flex flex-wrap content-center'>
                            <h2 className='text-blue-400 text-xl font-semibold'>{data.weather.name}, </h2><h3 className='text-gray-400 text-lg ml-2'>{data.weather.sys.country}</h3>
                        </div>
                        <div className='bg-gray-400 rounded-full'>
                            <img src={`http://openweathermap.org/img/w/${data.weather.weather[0].icon}.png`} />
                        </div>
                    </div>
                    <div className='info p-4 grid columns-1 gap-6'>
                        <h2>Temperature: {data.weather.main.temp}ºC</h2>
                        <h2>Feels Like: {data.weather.main.feels_like}</h2>
                        <h2>Temperature min: {data.weather.main.temp_min}ºC</h2>
                        <h2>Temperature max: {data.weather.main.temp_max}ºC</h2>
                        <h2>Pressure: {data.weather.main.pressure}</h2>
                        <h2>Humidity: {data.weather.main.humidity}</h2>
                        <h2>wind speed: {data.weather.wind.speed} KM/H</h2>
                        <h2 className='text-right text-blue-400'>{data.weather.weather[0].description}</h2>
                    </div>
                    <div className='hover:bg-red-500 rounded-md border-[1px] border-red-400 p-2 inline-block hover:text-white cursor-pointer' onClick={()=>setShow(true)}>
                       <h4>show news</h4> 
                    </div>
                </div>
                : null
            }
            </div>  
            {
                showNews ? 
                <div className='grid gap-7 grid-cols-3 w-[100%] mt-8 border-t-[.1px] border-slate-400 p-4'>
                    {
                        data.news.articles.map((e : any)=>(
                            <div className='p-6 bg-gray-400 rounded-md'>
                                <div className='header flex justify-between'>
                                    <a href={e.url} target="_blank" className='text-blue-500' style={{textDecoration: "underline"}}><h2>{e.title}</h2></a>
                                </div>
                                <h2 className='text-sm text-gray-200'>{e.description}</h2>
                            </div> 
                        ))
                       
                    }
                    
                </div>: null
            } 
    </main>
  )
}
