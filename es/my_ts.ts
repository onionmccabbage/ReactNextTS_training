// Here we use Typescript
// Typescript is never executed
// Typescript never appears in a browser (or anywehere else)
// ALL ts is transpiled to js before anything happens

// this line infers the type
let a = 1 // instead of let a:number

// you can declare your own types
type MyType = Snap | boolean | number | 'an error type'
let mt:MyType = true // ok but we must type this
// there will be NO TYPE CHECKING at runtime
mt = 33
// a type is a constraint, the data can ONLY be one of these types
type Kingdom  = 'Bacteria' | 'Protozoa' | 'Chromista'
let k:Kingdom = 'Protozoa'
type Arbitrary = 'literaly this' | 10 | false // any mix of types
let r:Arbitrary = false

const fnB = (n:number|string)=>{
    // here we see a type guard
    if (typeof(n)=='number'){
    return n**2
    } else if (typeof(n)=='string'){
        return n
    }
}

let result = fnB('3')

// interfaces (ts) and classes (es)
export interface Photo {
    albumId      :  number
    id           :  number
    title        :  string
    url          :  string
    thumbnailUrl :  string
    ooblywoobly? :  object // an optional member
    // we can declare methods
    pretty? : (x:boolean)=>{} // we could declare a return type, but no need
}
class Snap implements Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    // we can optionally declare a constructor
    constructor(snap:Photo){
        this.albumId = snap.albumId
        this.id = snap.id
        this.title = snap.title
        this.url = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    pretty ():string {
        return `${this.title}: ${this.url}`
    };
}

// enum
const enum CategoryFlags {
    None    = 0,
    Music   = 1,
    News    = 2,
    Drama   = 4,
    Comedy  = 8,
    Fiction = 16
}
// combinations will always be unique
const MusicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

const hasMusic   = (MusicalComedy & CategoryFlags.Music)  // 1001 & 0001
const hasComedy  = (MusicalComedy & CategoryFlags.Comedy) // 1001 & 1000
const hasDrama   = (MusicalComedy & CategoryFlags.Drama)  // 1001 & 0100

console.log(hasMusic, hasComedy, hasDrama)

