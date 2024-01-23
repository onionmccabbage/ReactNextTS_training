// the props are desctructured like this
//this TS can look ery clunky and overbearing
"use client" // otherwise they default to server-side component
import { useEffect } from "react"

export default function BrownComp ({x,y,action}:{x:number, y:boolean, action:any}){

    useEffect(()=>{
        action()
    }, []
    )

    const localHandler = ()=>{
        // carry out operations - validation etc.
        action() // invoke the parent method
    }
    return (
        <>
        <p>Child Component</p>
        <button onClick={()=>{localHandler}}>Go</button>
        </>
    )
}