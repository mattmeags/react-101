//Conditional Rendering

//If else block
function IfElse({isMainHeading}) {
    if (isMainHeading) {
        return  <h1>Main Heading</h1>
    } else {
        return <h2>Heading</h2>
    } 
}

//inline
function Inline({checkProp}) {
    return (
        <div>
            {
                checkProp && 
                <h1>{checkProp}</h1>
            }
        </div>
    )
}

function InlineElse({checkProp}) {
    return (
        <div>
            {
                checkProp 
                ? <h1>{checkProp}</h1>
                : <h1>No props</h1>
            }
        </div>
    )
}
