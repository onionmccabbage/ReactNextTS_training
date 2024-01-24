"use client"

// swr provides a hook called userSWR
import useSWR from "swr";
// we will be fetching some data
const fetcher = (a:any)=>{ return (fetch(a).then((res)=>res.json()))}
// const fetcher = url => axios.get(url).then(res => res.data)

function Profile() {
    // const { data, error } = useSWR('https://random-data-api.com/api/v2/banks?size=3', fetcher)
    // or there's 3 possible states of a request: "loading", "ready", or "error".
    const { data, error, isLoading } = useSWR('https://random-data-api.com/api/v2/banks?size=3', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    // or
    if (isLoading) return <div>loading...</div>
    return (
      <div>
        <h1>{data[0].bank_name}</h1>
        <p>{data[0].swift_bic}</p>
      </div>
    )
}
  
  export default function Home() {
    return (
      <>
        <div >
          <h2>My NextJS with SWR</h2>
          <p>Remember to npm install swr</p>
          <p>Get rid of odd background image by commenting out style import within _app.tsx</p>
        </div>
        <hr/>
        <Profile />
      </>
    )
  }