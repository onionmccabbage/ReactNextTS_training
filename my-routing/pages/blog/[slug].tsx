
// this fil is <proj>/pages/blog/

import { useRouter } from "next/router";

export default function BlogPost(){
    // anythig that starts with 'use' is a React hook (use effects)
    const router = useRouter()
    const {slug} = router.query // we can read the RTEST url
    return (
        // if we route to localhost:3000/blog/123
        // NB this is NOT subject to 'layout'
        <p>Post: {slug}</p> // ... we will see "Post: 123"
    )
}