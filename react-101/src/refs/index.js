import React from "react"
//Uses for Refs
//Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.

//Create a ref. use createRef() and add ref attribute to jsx element
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        //accessible via this.myRef.current; - in this case current is the DOM element object
        return <div ref={this.myRef}/>
    }
}

// When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.
// When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
// You may not use the ref attribute on function components because they don’t have instances.

//Callback Regs

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        }


    this.focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.textInput) this.textInput.focus();
      };
    }

    componentDidMount() {
        this.focusTextInput();
    }
      // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef}/>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                    />
            </div>
        )
    }
}