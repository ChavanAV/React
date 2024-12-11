
import React, { useState } from 'react'

let UseStateEx1 = () => {
    // let [state, setState] = useState(0);
    // useState returns the array in which we have two values 1st is value and another is state.
    // We are distructuring the array into two variables state and setState for further use.


    let useMyState = () => {
        let setMyState = (val) => {
            // Modify current state
        }
        return [a, setMyState];
    };
    let [state, myState] = useMyState(0);
    console.log(state);


    return (
        <div>
            UseStateEx1
            <h2>Count: {state}</h2>
            <button onClick={() => { setState(state + 1) }}>Click</button>
        </div>
    )
}

export default UseStateEx1
