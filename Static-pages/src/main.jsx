import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import './index.css'

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <main>
        {Page()}
        <Page />
    </main>  
)

function Page(){
    return (
        <main>
            <img src="/react-logo.png" width="40px" alt="React logo" />
            <h1>Why I'm excited to learn React!</h1>
            <ol>
                <li>It's highly employable and used by top companies.</li>
                <li>The component-based architecture makes building UI clean and reusable.</li>
                <li>It opens the door to building mobile apps with React Native later on.</li>
            </ol>
    </main>
    )
}

