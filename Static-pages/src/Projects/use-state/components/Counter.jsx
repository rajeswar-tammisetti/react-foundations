import RenderH1 from "./counter_helper"
import React from "react"
export default function Counter() {
    const [counter, change_count] = React.useState(0)
    function increment() {
        change_count(prev_state => prev_state + 1) //
    }
    function decrement() {
        change_count(counter - 1)
    }
    return (
        <div id="container">
            <h1>Counter</h1><br />
            <button onClick={decrement}>-</button>
            <RenderH1 number={counter} />
            <button onClick={increment}>+</button>
        </div>
    )
}