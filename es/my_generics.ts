// remember: Typescript is a CONTRACT not real types in production

{
    // the problem
    // function zeroethElement(a:any[]){
    const zeroethElement=(a:Array<any>):any =>{ // we are still unsure of the type
        return a[0]
    }
}

{
    // the solution is to use generics. By convention we use T
    const zeroethElement=<T>(a:Array<T>):T=>{ // we can be confident we will get the SAME type back
    // const zeroethElement=<T>(a:T[]):T=>{ // we can be confident we will get the SAME type back
        // we could introspect the type and behave dofferently
        return a[0]
    }
    // lets check it works
    const a_s:Array<string> = ['alpha', 'beta', 'gamma']
    const a_n:number[] = [4,3,2]
    console.log(zeroethElement(a_s))
    console.log(zeroethElement(a_n))

    // we can have mutliple generics. We can specify optional args with '?'
    const zeroethElementMult = <T, Q>(a:T[], b?:Q[]):T=>{ // or T|Q etc
        return a[0]
    }
    console.log(zeroethElementMult(a_n))
}