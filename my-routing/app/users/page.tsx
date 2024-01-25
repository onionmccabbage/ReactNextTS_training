// layout is NOT essential

// code to fetch data from the (next.js) api
async function getAllUsers(){
    const data = await fetch(`http://localhost:3000/api/users`)
    if(!data.ok){
        throw new Error('failed to fetch')
    }
    return data.json() // just return the json part of the response
}
// sunce the API data-fetching is async, our page function must be async
export default async function Users(){
    const data = await getAllUsers()
    return (
        <section>
            <h3>Users page</h3>
            {/* a very tidy way to see the returned data from ANY API */}
            <pre>{JSON.stringify(data)}</pre>
            <p>{data.data[0].name}</p>
            <p>{data.data[1].name}</p>
            <p>{data.data[2].name}</p>
        </section>
    )
}