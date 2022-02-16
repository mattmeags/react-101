import React, {useContext} from 'react';

const UserContext = React.createContext();


function Component1() {
    return (
        <UserContext.Provider value={'Matt'}>
            <Component2/>
        </UserContext.Provider>
    );
}
function Component2() {
    return <Component3/>;
}
function Component3() {
    return <Component4/>;
}
function Component4() {
    return <Component5/>;
}
function Component5() {
    //Can use the context value UserContext from top level component
    const user = useContext(UserContext);
    return (
        <h2>{`Hello ${user} again!`}</h2>
    );
}