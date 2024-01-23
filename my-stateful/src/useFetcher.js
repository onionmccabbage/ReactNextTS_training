import { useEffect, useState } from "react";

// many ways we can get external data
async function logMovies() {
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
    const fetchData = (whichPhoto=1) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${whichPhoto}`)
            .then((r) => {
                console.log(r.data) // data?
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                // always runs
            })
    }
    useEffect(
        fetchData(whichPhoto) // call this local function
        // we can declare an array of dependecies for this effect
        // an empty array means run ONCE (on component paint)
        [whichPhoto]) // if anything specified in the array changes, useEffect will run
}