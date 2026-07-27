import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Hi")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("Definitely")
     * 2. Add a click event listener to the button
     *    that runs `handleClick` when the button is clicked.
     */
    function handleClick() {
        if (isImportant === "Hi") {
            setIsImportant("Bye")
        } else {
            setIsImportant("Hi")
        }
    }
    return (
        <main>
            <h1>{isImportant}</h1>
            <button onClick={handleClick}>Click</button>
        </main>
    )
}
