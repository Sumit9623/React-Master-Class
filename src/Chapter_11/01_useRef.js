

// Note variable using useRef are not States
// difference between state and useRef Variable is
// component Rerender when state changes but does not render when useRef changes


import { useRef, useState } from "react";

function Counter1({children}) {
    const [number,setNumber]=useState(0)
    let cnt = useRef(0);
    const handleClick =(e)=>
    {
        cnt.current++;
        e.stopPropagation();
        setNumber((number)=>number+1);  // arrow function runs sequentially for multiple concurrent calls
        setNumber((number)=>number+1);  // arrow function runs sequentially for multiple concurrent calls
        setNumber((number)=>number+1);  // arrow function runs sequentially for multiple concurrent calls
    }
    return (
        <div>
            <h2>{number}</h2>
            <h2>Count using useRef : {cnt.current}</h2>
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}
export default Counter1
