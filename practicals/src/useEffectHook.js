import { useEffect, useState } from 'react';

function UseEffectHook()
{
    const [count,setcounter]=useState(0);
    useEffect(()=>
    {
        console.log("Only state depend mounted")},[count])
        
    return(
        <>
            <p>{count}</p>
            <button onClick={()=>setcounter(count-1)}>Decrement</button>
            <button onClick={()=>setcounter(count+1)}>Increment</button>
        </>
    );
}
export default UseEffectHook