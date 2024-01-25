import { useRouter } from "next/router";

export default function Weather(){
    const router = useRouter()
    const {city, desc} = router.query
// /weather/hull/rainy
    return <p>
        Weather: {city} {desc}
    </p>
}