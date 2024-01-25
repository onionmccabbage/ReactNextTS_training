// this gets 'compiled' on the seerver
import Link from "next/link"
export const Navigation = () => {
    return (
        <nav>
            {/* <a href='/info'>Info</a> */}
            {/* the Link controls history management, access to REST/query and 'active link' */}
            <Link href='/'>Home</Link> |&nbsp;
            {/* we can use ANY content for a link - images, text etc */}
            <Link href='/info'>Info</Link> |&nbsp;
            {/* prefetch defaults to true */}
            <Link prefetch={false} href='/users'>Users</Link>
        </nav>
    )
}