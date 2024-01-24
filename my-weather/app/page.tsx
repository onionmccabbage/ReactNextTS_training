"use client"
import { useState } from "react";
import styles from "./page.module.css";

import useSWR from "swr";
import { Url } from "next/dist/shared/lib/router/router";

// custom types
type params = { city: string, country: string }

const fetcher = (a:Url) => { return (fetch(a).then((res) => res.json())) }

function Weather({weatherUrl}:{weatherUrl:Url}) {
  const { data, error, isLoading } = useSWR(weatherUrl, fetcher)
  if (error) return <div>Failed to load: {error}</div>
  if (!data) return <div>Loading...</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <h1>Weather: {data.weather[0].description}</h1>
      <p>Temperature: {data.main.temp}&deg;C</p>
    </div>
  )
}

const UserFields = ({ params, handleParams, getWeather }: { params:params, handleParams: React.ChangeEventHandler<HTMLFormElement>, getWeather:React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <>
      <input placeholder="City" required name="city" value={params.city} onChange={handleParams} />
      <input placeholder="Country" required name="country" value={params.country} onChange={handleParams} />
      <button onClick={getWeather}>Go</button>
    </>
  )
}

export default function Home() {
  const apiKey = `48f2d5e18b0d2bc50519b58cce6409f1` // good for 60 requests per second
  const [params, setParams] = useState({ city: 'hull', country: 'uk' })
  const [weatherUrl, setWeatherUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&units=metric&APPID=${apiKey}`)
  const handleParams = (event: React.FormEvent<HTMLInputElement>) => { 
    if (event.currentTarget.name == 'city') {
      setParams({ ...params, city: event.currentTarget.value })
    } else if (event.currentTarget.name == 'country') {
      setParams({ ...params, country: event.currentTarget.value })
    }
  }
  const getWeather = ()=>{ // button was clicked, so make a request for weather
    // this will trigger SWR to make a fresh request since the weatherUrl is changed
    setWeatherUrl(`https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&units=metric&APPID=${apiKey}`)

  }

  return (
    <main className={styles.main}>
      <h2>Review 3: Weather App</h2>
      <Weather weatherUrl={weatherUrl}/>
      <UserFields params={params} handleParams={handleParams} getWeather={getWeather} />
    </main>
  );
}
