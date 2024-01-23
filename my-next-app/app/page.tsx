import Image from "next/image";
import styles from "./page.module.css";
import BrownComp from "./BrownComp";

export default function Home() {
  const doStuff = ()=>{
    alert(`Stuff happened`)
  }
  const xval = 1
  const yval = true
   return (
   <>
    <h3>My React/Next App</h3>
    <BrownComp x={xval} y={yval} action={doStuff} />
   </>
  );
}
