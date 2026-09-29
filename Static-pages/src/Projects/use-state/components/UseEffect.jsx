import React from "react";
export default function UseEffect(){
    const [count, setCount] = React.useState(0)
    console.log("Rendered!")
    React.useEffect(function (){
        console.log("Effect function ran",`${count}`);
    },[count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}