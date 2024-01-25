// we always pass children as props but we might pass other props too
export default function InfoLayout({children,}:{children:React.ReactNode}){
    return (
        <>
        {/* we pass any child content as props, then render in the usual way */}
            {/* we might wrap a provider */}
            <h6>Layout for Info</h6>
            <main>{children}</main>
        </>
    )
}