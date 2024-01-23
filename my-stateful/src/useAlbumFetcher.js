// abstracted
// Hook names NUST start with 'use'
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAlbumFetcher = (whichAlbum = 1) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // solution using .then
    // useEffect(() => {
    //     const fetchData = (albumId = 1) => {
    //         axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos/`)
    //             .then(function (r) {
    //                 // handle success
    //                 // console.log(r.data);
    //                 setData(r.data)
    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error);
    //             })
    //             .finally(function () {
    //                 setLoading(false);
    //             })
    //     };
    //     fetchData(whichAlbum);
    // }, [whichAlbum]); // or []

    // solution using async/await
        useEffect(() => {
        const fetchData = async (albumId = 1) => {
            try {
                // why is is data:response (it MUST be data)
                const { data: response } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos/`);
                setData(response);
            } catch (error) {
                // should handle errors but here we just console.log them
                console.error(error)
            }
            setLoading(false);
        };
        fetchData(whichAlbum);
    // NOTE: [] means this will fire once, when the first render happens
    // }, []); // absolutely no dependency
    // [whichAlbum] means this will fire on first render and for any change to whichAlbum
    }, [whichAlbum]); // responds to changes in whichAlbum

    return {
        data,
        loading,
    };
};

export default useAlbumFetcher;
