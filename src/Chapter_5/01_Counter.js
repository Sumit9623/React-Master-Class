// This file is about state and  useState Hook

import { useState } from "react";
function Counter({children}) {
//   let number = 0;  // Local variable can not be updated in UI easily therefore we use State varibles

let [number,setNumber]=useState(0)
//  useState returns a array
//  number is state
//  setNumber is setter function
    const handleClick =(e)=>
    {
        e.stopPropagation();
        setNumber((number)=>number+1);  // arrow function runs sequentially for multiple concurrent calls
    }
    return (
        <div>
        <h2>{number}</h2>
        <button onClick={handleClick}>{children}</button>
        </div>
    );
}
export default Counter
