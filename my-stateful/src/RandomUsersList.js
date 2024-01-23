import React, { useState } from 'react';
// this happens to be an axios tool but could use anything
import useRandomAPI from './useRandomAPI.js'

const RandomUsersList = () => {
    const [seed, setSeed] = useState('users') // or 
    const {
        data,
        loading,
    } = useRandomAPI(seed);// we call custom hook - MUST be at top level of function

    return (
        <>
            <h4>Load Random Users API data</h4>
            <ul>
                {/* conditionally show 'loading' or response data */}
                {loading && <div>Loading</div>}
                {!loading && (
                    <div>
                        {
                            data.map((item) => {
                                return (
                                    <li key={item.id}>
                                        {item.first_name} {item.last_name} {item.date_of_birth}
                                    </li>
                                )
                            }
                            )
                        }
                    </div>
                )}
            </ul>
        </>
    )
}

export default RandomUsersList;