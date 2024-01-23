// abstracted
// Hook names NUST start with 'use'
import { useEffect, useState } from 'react';
// remember to npm install axios
import axios from 'axios';

const useRandomAPI = (seed='users') => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (seed = 'users') => {
            try {
                // 'size' returns an array of that many items
                const { data: response } = await axios.get(`https://random-data-api.com\/api/users/random_user?size=3`);
                setData(response);
            } catch (error) {
                // should handle errors but here we just console.log them
                console.error(error)
            }
            setLoading(false);
        };

        fetchData(seed);
    }, []); // absolutely no dependency
    // }, [seed]); // responds to changes in seed

    return {
        data,
        loading,
    };
};

export default useRandomAPI;
