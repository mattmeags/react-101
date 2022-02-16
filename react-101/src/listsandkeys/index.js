//Rendering a List
function RenderNumbers() {
    const numbers = [1, 2, 3, 4, 5],
        listItems = numbers.map(number => <li>{number}</li>)
    return <ul>{listItems}</ul>
}

//Keys
function RenderList() {
    const list = [
        {
            id: 1,
            text: 'yo'
        },
        {
            id: 2,
            text: 'hello'
        }
    ];

    return (
        <ul>
            {
                list.map(({id, text}) => <li key={id}>{text}</li>)
            }
            
        </ul>
    )
}