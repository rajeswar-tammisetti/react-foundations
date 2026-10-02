import React from "react";
import "../styles.css";
export default function UseEffect() {
    const [count, setCount] = React.useState(1);
    const [data, setData] = React.useState([]);
    const [showData,setShow]=React.useState(true);
    React.useEffect(() =>{
            if (count<1) return;
            fetch(`https://swapi.dev/api/people/${count}`)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error)=>console.err(error));
        },
        [count],
    );

    return (
        <div style={{ backgroundColor: "#333" }}>
            <h2>The Count is {count}</h2>

            <button onClick={() => setCount((prevCount) => prevCount + 1)}>View Next</button>

            {count>0 && <button onClick={()=>setShow((prevState) => !prevState)}>{showData ? "Hide Data" : "Show Data"}</button>}

            <button onClick={()=>setCount((prevCount) => prevCount - 1)}>View Previous</button>
            {showData && <p>{JSON.stringify(data)}</p>}
        </div>
    );
}
