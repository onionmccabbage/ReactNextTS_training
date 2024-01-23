import React, { useState } from 'react';
// this happens to be an axios tool but could use anything
import useFetchData from './useAlbumFetcher.js'

// an abstracted version
const PhotoList = () => {
    const [whichAlbum, setWhichAlbum] = useState(1)
    const {
        data,
        loading,
    } = useFetchData(whichAlbum);// we call custom hook - MUST be at top level of function
    const handleWhichAlbumChange = (e) => {
        setWhichAlbum(e.target.value)
    }
    return (
        <>
            <h4>Load Album API data &nbsp;
                <input name='whichAlbum' type='number' min={1} max={10}
                    value={whichAlbum} onChange={handleWhichAlbumChange} />
            </h4>
            <ul>
                {/* conditionally show 'loading' or response data */}
                {loading && <div>Loading</div>}
                {!loading && (
                    <>
                        {
                            data.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <img src={item.thumbnailUrl} alt={item.title} title={item.title} />
                                        {item.title}
                                    </li>
                                )
                            }
                            )
                        }
                    </>
                )}
            </ul>
        </>
    )
}

export default PhotoList;