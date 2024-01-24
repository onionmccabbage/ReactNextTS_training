"use client"
export function Weather({weatherUrl}:{weatherUrl:Url}) {
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