import { useState } from 'react' // this will be resolved by the toolchain

// NB Form not form
export default function Form(){
    // this form will have state (its own internal memory)
    // the initial state may be ANY structure - simple or complex
    // we have a 'person' getter-function and a 'setPerson' setter function
    const [person, setPerson] = useState({firstName:'Ethel', lastName:'Skronk', level:'admin'})

function handleFirstNameChange(event){ // NB the event is passed anyway!!
    // we must call the React state function 'setPerson' in order to update the state
    // NB React always TOTALLY REPLACES the state (it does NOT mutate it)
    // setPerson({firstName:event.target.value, lastName:person.lastName, level:person.level})
    /// ...person will destructure the existing 'person' into its elemental parts
    setPerson({...person, firstName:event.target.value})
}

    return (
        <>
        {/* value is data-bound to the return from the function called 'person' */}
        {/* in React we write 'controlled fields' */}
        <input name='firstName' value={person.firstName} onChange={handleFirstNameChange}/> 
        <hr/>
        <p>{person.firstName} {person.lastName}</p>
        </>
    )
}