import { useEffect, useState } from "react";

// many ways we can get external data
async function logMovies() {
    // this is using Promises
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();
    console.log(photos);
}

// in React we encapsulate API requests in 'effects'
const usePhotoFetcher = () => {
    // here we choose to set an initial stat as an array
    const [data, setData] = useState([])
    let whichPhoto = 1
    // we make use of useEffect (from React) for async unpredictable outcomes
    // we write 'async' to say this function may run asynchronously
    const fetchData = async (whichPhoto=1) => {
        // fetch(`https://jsonplaceholder.typicode.com/photos/${whichPhoto}`)
        //     .then((r) => {
        //         console.log(r.data) // data?
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //         // always runs
        //     })
        // the more modern way is try-catch and async await
        try {
            // 'await' makes it clear we may not get a response immediately
            const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${whichPhoto}`)
        } catch(err){
            console.log(err)
        }


    }
    // useEffect will ONLY get the data on component paint or when a dependency changes
    // so several components can share t his without innefficient fetching
    useEffect(
        fetchData(whichPhoto) // call this local function
        // we can declare an array of dependecies for this effect
        // an empty array means run ONCE (on component paint)
        [whichPhoto]) // if anything specified in the array changes, useEffect will run
}