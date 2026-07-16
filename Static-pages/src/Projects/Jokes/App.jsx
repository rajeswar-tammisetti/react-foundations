import Jokes from "./components/jokes"
import Index from "./components/index.jsx"
import "./src/style.css"
export default function App(){
    return(
        <div className="jokes-list">
            {Jokes.map((joke)=>{
                return(
                    <Index key={joke.id} {... joke}/>
                )
            })}
        </div>
    )
}