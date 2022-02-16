//Context
//Pass data through component tree without having to 
//pass props down manually at every level

//Context is global state fro a parent component and its chil

//Example
import React, {useState, useContext} from "react";

//This creates the context ala React.createContext()
export const ThemeContext = React.createContext();

export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <>  
            {/* wrap this around children who will have this global state as well */}
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={setDarkTheme(prevDarkTheme => !prevDarkTheme )}>Toggle Theme</button>
                <ClassContextComponent/>
                <FunctionContextComponent/>
            </ThemeContext.Provider>
        </>
    )
}


class ClassContextComponent extends React {
    render() {
        return (
            // if not in same file we would need to import theme context
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div className={this.darkTheme ? 'dark-class' : 'light-class'}>Content</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}

//See more useContext
function FunctionContextComponent() {
    //would need to import ThemeContext
    const darkTheme = useContext(ThemeContext);
    return (
        <div className={darkTheme ? 'dark-class' : 'light-class'}>Content</div>
    )
}

//Sample contenxt only werapper
//will still need to define themecontext n 
//TODO: I'm commenting out cause this needs a custom hook
// const ThemeContext = React.createContext();
// const ThemeUpdateContext = React.createContext();

// function ThemeProvider({children}) {
//     const [darkTheme, setDarkTheme] = useState(initialState);

//     function toggleTheme() {
//         setDarkTheme(prevDarkTheme => !prevDarkTheme)
//     }

//     return (
//         <ThemeContext.Provider value={darkTheme}>
//             <ThemeUpdateContext.provider value={toggleTheme}>
//                 {children}
//             </ThemeUpdateContext.provider>
//         </ThemeContext.Provider>
//     )
// }
//Then import theme provider
//