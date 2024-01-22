// using 'export' makes this file a module
// we may have ONE default
export default function Profile() {
    // we can declare some local cosntants for usee within this component
    const pic = 'https://i.imgur.com/jA8hHMpm.jpg'
    const description = 'Katsuko Saruhashi';
    // we can return ANY jsx (in a single root)
    return (
      // we use {} to inject data
      <img src={pic} alt={description} />
    )
  }