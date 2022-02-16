// JSX
import React, { ReactDOM } from "react";

//Sample base
const myElement = <h1>JSX Header</h1>;

ReactDOM.render(myElement, document.querySelector('#jsx-exampe-one'));

// This is not JSX
//Babel compiles line 5 into this
const myElement2 = React.createElement('h1', {class: 'is-this-attribute-prop'}, 'This header is not JSX');

ReactDom.render(myElement2, document.querySelector('react-create-el"'));

//JSX Expressions
const myElement3 = <h1>{2 * 2} - this was generated via expression</h1>;

//JSX Block
const myElement4 = (
    <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
    </ul>
);

//JSX blocks MUST have a top level element
//If sibling elements generated for semantics use Fragement
//<></> is the fragement
const jsxFragment = (
    <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </>
);

//JSX elements must close
//HTML allows input to not close, JSX requires it for all els
const closingInput = <input type="text" />; 

//JSX Attributes
//className Attribute
const classNameJSX = <h1 className="myClass">Hello</h1>

//expressions in attribute value
const imgURL = './path/to/image.png';
const attrExpressionElement = <img src={imgURL}></img>;

//camelCase HTML attributes names that are "2 words or more"
const cameCaseAttr = <button tabIndex="-1">Only mouse click here</button>


//JSX conditionals
//Use ternary expression
const x = 5;
const conditionalJSX = <h1>{x < 10 ? "Less than 10" : "10 or greater"}</h1>

//Can execute functions in expressions
function sayHello() {
    return "woof";
}

const jsxWithFunction = <h1>The dog says {sayHello()}</h1>