//https://kentcdodds.com/blog/props-vs-state
//Props are read only
//All React components must act like pure functions with respect to their props.
//So you cannot change props in components.

//Pure Functional Component
//does not change inputs
function sum(a, b) {
    return a + b;
}

//impore functional component
function withdraw(account, amount) {
    account.total -= amount;
}

//wont work
function AddOne(props) {
    props.n2 += 1;
    return (
        <div>
          {props.n2}
        </div>
      )
}

//Can assign to var and mofity var
function AddOne(props) {
    let a = props.n2;
    a += 1;
    return (
        <div>
          {a}
        </div>
      )
}
//Destructing allows you to do this as well.
function Add({n1, n2}) {
    n2 = 0;
    return (
      <div>
        {n1 + n2} //always prints out n1
      </div>
    )
  }

//"state" is data that changes over the lifetime of a specific instance 
//State is private and fully controlled by component