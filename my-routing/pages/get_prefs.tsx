import { useRouter } from 'next/router'
import { useState } from 'react';
export default function GetPrefs() {
  const router = useRouter()
  const [prefs, setPrefs] = useState({ 'city': 'Bath', 'desc': 'hail' })
  // could be other events (MouseEvent or just Event)
  function onPrefsCompleted(event: any) {
    event.preventDefault(); // we do not want the form to submit
    // console.log(`city is ${prefs.city}`)
    router.push({
      pathname: "/weather/[city]/[desc]",
      query: { city: prefs.city, desc: prefs.desc },
    });
  }
  // 
  function handlePrefsChange(e: React.FormEvent<HTMLInputElement>) {
    const whichField = e.currentTarget.name
    if (whichField == 'city') {
      // setCity(e.target.value) // ts doesnt like this
      setPrefs({...prefs, 'city':e.currentTarget.value})
    } else if (whichField == 'desc') {
      // setDesc(e.target.value)
      setPrefs({...prefs, 'desc':e.currentTarget.value})
    }
  }

  return (
    <div>
      <h1>Specify Preference Here</h1>
      <form >
        <input name="city" placeholder="City name" value={prefs.city} onChange={handlePrefsChange} />
        <input name="desc" placeholder="Weather Description" value={prefs.desc} onChange={handlePrefsChange} />
        <button onClick={onPrefsCompleted}>Go</button>
      </form>
    </div>
  );
}