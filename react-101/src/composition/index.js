//Compisition vs Inhirtance - FB never uses inheritance

//props.children represents content nested in Component JSX tag

function CompositionComponent({children}) {
    return <div>{children}</div>
}

function ComponentUsingCompositionComponent() {
    const valueInThisComponent = 'yo';
    <CompositionComponent>
        <h1>Hello World</h1>
        <p>{valueInThisComponent}</p>
    </CompositionComponent>
}

//"Scoped Slots" in vue
function Card({head, body}) {
    return (
        <article className="card">
            <div className="card__head">
                {head}
            </div>
            <div className="card__body">
                {body}
            </div>
        </article>
    )
}

function App() {
    return (
        <Card>
            head={<h1>Header</h1>}
            body={<p>The body</p>}
        </Card>
    )
}

//In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:
function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  
  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }