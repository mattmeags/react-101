import React from "react";

//Simple Component
class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <h2>You are {this.props.name}</h2>
            </div>
            )
    }
}

//With State
class SetState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { sample: "state" };
    }
  
    updateState() {
      this.setState({ sample: "new state" });
    }
    render() {
      return (
        <div>
          <h1>{this.state.sample}</h1>
          <button onClick={this.updateState.bind(this)}>click here</button>
        </div>
      );
    }
  }

class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = 'state';
        if (props.a) {
            this.updateState.bind(this);
        }
        
    }


    updateState() {
        this.setState({state: 'new state'});
    }
    render() {
        return (
            <div>
                <h1>{this.state}</h1>
                <button onclick={this.updateState}>click here</button>
            </div>
        )
    }
}