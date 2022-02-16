
import React, {useState, useRef, useEffect} from 'react';

//It seems to reference a ref use access the "current" property i.e. ref.current
function App() {
    const [name, setName] = useState('');
    const renderCount = useRef(0); //can store persistant value and when updated does not cause rerender
    //updating state rerenders component 
    //This persists BETWEEN rerenders of our component

    //commonly used to refernce input elements
    const inputRef = useRef();

    //Can store previous state value
    const prevName = useRef('')

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        //renderCount.current persists
    });

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    function focus() {
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div> My name is {name} and it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}