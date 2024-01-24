// the props are desctructured like this
import { useEffect, useState } from "react"
// remember we can inject any immutable props into our component
export default function BrownComp ({x,y,action}){

    // useEffect(()=>{
    //     action()
    // }, []
    // )
    const [msg, setMsg] = useState('Message')
    const handleChange = (event)=>{
        setMsg(event.target.value)
    }

    const localHandler = ()=>{
        // carry out operations - validation etc.
        action(msg) // invoke the parent method
    }
    return (
        <>
        <p>Child Component</p>
        <input name='msg' value={msg} onChange={handleChange} />
        <button onClick={localHandler}>Go</button>
        </>
    )
}