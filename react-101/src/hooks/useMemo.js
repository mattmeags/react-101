import React, {useState, useMemo, useEffect} from "react";

// Memoization is a programming technique which attempts to increase a function's performance by caching its previously computed results

//useMemo is called every render and saves value in memory - so becareful when using "everywhere"


function App() {
    const [number, setNumber] = useState(0);
    //Changing this will cause slow function to rerun because state change rerenders component
    const [setting, setSetting] = useState(true);
    //Any time we change the input below this recalled cause state rerenders compoenet
    const doubleNumber = slowFunction(number);
    //When component is rerendered by change of setting state this won't rerun because number is the same
    //This only runs when number changes
    //This chaches the result in tripleNumber
    const tripleNumber = useMemo(() => {
        return slowFunction2(number)
    }, [number]); //list of depencies, fires hook when changes


    //Can also use useMemo to store REFERNCE of an object or array
    const componentObject = useMemo(() => {
        return {
            prop: true,
            propB: false,
            probC: number
        }
    }, [number]); 

    useEffect(() => {
      console.log('componentObject changed')

    }, [componentObject]);
    //Because componentObject is in useMemo it only change when number changes
    //else on every render a NEW reference of the object is created
    

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <div>{doubleNumber}</div>
            <div>{tripleNumber}</div>
            <button onClick={() => setSetting(prevSetting => !prevSetting)}></button>
            <div>{setting}</div>
        </>
    )
}

function slowFunction(number) {
    for (let i = 0; i < 1000000000; i++) {} //This is silly but its supposed to represent a computation that takes awhile
    return number * 2;
}


function slowFunction2(number) {
    for (let i = 0; i < 1000000000; i++) {} //This is silly but its supposed to represent a computation that takes awhile
    return number * 3;
}