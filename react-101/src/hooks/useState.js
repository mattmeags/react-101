//useState
import React, {useState} from "react";

function UseStateExample() {
    //useState returns an array
    //index 0 is the state value
    //index 1 is the method to update the state
    //pass inital state into useState hook
    const [state, setState] = useState(0);

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => setState(1)}>Change the above to 1</button>
        </div>
    )
}

//in setState can pass callback and param is the previousState