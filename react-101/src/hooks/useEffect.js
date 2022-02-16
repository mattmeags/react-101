import React, {useEffect, useState} from "react";
//Effects w/out Clean up
//Run additional code after React has updated the DOM
//Seperate useEffects to seupeate concerns

//Simple useEffect
function SimpleUseEffect({propsVal}) {
    function doSomething() {
        console.log('something done');
    }
    //This runs on every render
    //Equivalent of componentDidMount and componentDidUpdate Hooks
    //So runs on every mount and every update
    useEffect(() => {
        doSomething();
    });
    return (
        <div>{propsVal}</div>
    )
}

function UseEffectsExample({propsVal}) {
    useEffect(() => {
        //Runs on every render

        // returning is the unmounted hook in vue
        return(() => console.log('unmounting'));
    });

    useEffect(() => {
        //Runs only on the first render
      }, []);

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [prop, state]);
}


function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // Whn count changes run the effct
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }


//run useEffect once
function UseEffectOnce({propsVal}) {
    useEffect(() => {
        propsVal++;
    },[]); //Empty array only runs once
    return (
        <div>{propsVal}</div>
    );
}

//run useEffect based on dependency
function RunEffectWhenDependencyChanges() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        stateVal++
    },[stateVal]); //Empty array only runs once
    return (
        <div>{stateVal}</div>
    );
}