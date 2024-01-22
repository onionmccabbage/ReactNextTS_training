import { Fragment } from 'react'
// read in the data
import { notes } from './static_data/notes'



// and here is the component to render the results
export default function BankNotes(){ //does this need to take any props?
    // maybe filter it
    const kc = notes.filter( (note)=>{
        return note.title.includes('Charles')
    }
    )
    // certainly iterate over it
    // const items = kc.map((note)=>{ // only show filtered values
    const items = notes.map((note)=>{
        return (
            <Fragment key={note.title}>
                <tr>
                    <td>
                        <img src={note.src} width={note.width/10} height={note.height/10}
                            alt={note.title} title={note.title} />
                    </td>
                    <td>{note.title}</td>
                </tr>
            </Fragment>
        )
    })
    // Here is our main component structure (to contain everything else)
    return (
        <>
        <h3>Current Bank Notes</h3>
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
        </>
    )
}