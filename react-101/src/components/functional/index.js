import { ReactDOM } from "react"
// Components are functions that return JSX
//Basic Component
function HelloWorld(props) {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>You are {props.name}</h2>
            <SimpleComonent/>
        </div>
        )
};

//Simple Component
function SimpleComonent() { 
    return <p>This is a simple component</p>
 }

//Rendering component
const el = <HelloWorld name="Matt"/>
ReactDOM.render(
    el,
    document.getElementById('root')
);

//Component with State
function StateComponent({prop1, prop2}) {
    const [state1, updateProp] = useState(prop1)
}