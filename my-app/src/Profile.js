// using 'export' makes this file a module
// we may have ONE default
export default function Profile() {
    // we can return ANY jsx (in a single root)
    return (
      <aside>
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
        <img
          src="https://i.imgur.com/jA8hHMpm.jpg"
          alt="Katsuko Saruhashi" />
        <img
          src="https://i.imgur.com/lICfvbD.jpg"
          alt="Aklilu Lemma"
        />
        <img
          src="https://i.imgur.com/QIrZWGIs.jpg"
          alt="Alan L. Hart"
        />
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <img
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <img
          src="https://i.imgur.com/1bX5QH6.jpg"
          alt="Lin Lanying"
        />
        <img
          src="https://i.imgur.com/szV5sdG.jpg"
          alt="Maria Skłodowska-Curie"
        />
      </aside>
    )
  }

export function dummy (){

}