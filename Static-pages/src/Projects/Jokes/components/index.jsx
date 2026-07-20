export default function renderJokes(prop){
    return(
        <div className="joke">
            {prop.setup && <p className="setup">Setup: {prop.setup}</p>}
            <p className="punchline">Punchline: {prop.punchline}</p>
            <hr />
        </div>
    )
}
