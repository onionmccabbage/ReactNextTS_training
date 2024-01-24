{
    // the solution is to use generics. By convention we use T
    const zeroethElement = (a) => {
        // const zeroethElement=<T>(a:T[]):T=>{ // we can be confident we will get the SAME type back
        // we could introspect the type and behave dofferently
        return a[0];
    };
    // lets check it works
    const a_s = ['alpha', 'beta', 'gamma'];
    const a_n = [4, 3, 2];
    console.log(zeroethElement(a_s));
    console.log(zeroethElement(a_n));
    // we can have mutliple generics. We can specify optional args with '?'
    const zeroethElementMult = (a, b) => {
        return a[0];
    };
    console.log(zeroethElementMult(a_n));
}

{
    const whoKnows = (args)=>{
        if (length(args)==0){
            // do some no-args stuff
        } else if (length(args)==1){
            // do some one-args stuff
        } else if (length(args)==2){
            // do some two-args stuff
        } 
    }
}

