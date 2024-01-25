// we MUST declare this as client-side - REST is a client-side resolution
"use client"

import { usePathname } from "next/navigation"

export default function Weather(){
    const pathname = usePathname()
    return (
        <>
        <p>current path name is: {pathname}</p>
        </>
    )
}