//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//Mounting
//Component is created and inserted into DOM
constructor();
render();
componentDidMount();

//Updating
//Change to props or state
shouldComponentUpdate();
render();
componentDidUpdate();

//Unmounting
//Component is removed from the DOM
componentWillUnmount()

import React from "react";

class LifeCycleComponent extends React.Component {
    constructor() {
        console.log('I fire first when mounting')
    }
    componentDidMount() {
        console.log('I fire after the component mounted')
    }
    componentDidUpdate() {
        console.log('I fire after the component has updated')
    }
    componentWillUnmount() {
        console.log('I fired when the Component is removed from the DOM')
    }
    render() {
        return(
            <h1>The Component either Mounted or Updated</h1>
        )
    }
}