import React from 'react'
export default function Counter(props) {
    console.log(props)
    return (
        <h1>{props.number}</h1>
    )
}
