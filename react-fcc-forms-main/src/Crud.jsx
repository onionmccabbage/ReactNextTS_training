// sample CRUD

import { useState } from "react";

const myPost = () => {
    // POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    //   {
    //     id: 101,
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1
    //   }
}

// Update (PUT)
const myPut = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    //   {
    //     id: 1,
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1
    //   }
}

// DELETE
const myDelete = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
    // no output from this particular API
}

export default function MyCrud(){
    const {response, setResponse} = useState('watch here...')
    return (
        <>
        <h3>See console for output of CRUD operations</h3>
        <button onClick={myPost}>Post</button> |&nbsp;
        <button onClick={myPut}>Put</button> |&nbsp;
        <button onClick={myDelete}>Delete</button>
        </>
    )

}
