// using 'export' makes this file a module
// we may have ONE default
// this function may have NO arguments or some arguments
// lets talk more about {} - this is the object represening the 'props' of this component
export default function Profile({person}) { // NB we MUST use curly braces here
    // we can declare some local cosntants for usee within this component
    const pic = 'https://i.imgur.com/jA8hHMpm.jpg'
    const description = 'Katsuko Saruhashi';
    // we can return ANY jsx (in a single root)
    return (
      // we use {} to inject data
      // remember - the original values for all html attributes remain immutable
      // likewise, every 'prop' in React is immutable
      <img src={person.source} alt={person.name} title={person.name} />
    )
  }