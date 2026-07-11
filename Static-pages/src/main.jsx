import {createRoot} from "react-dom/client"
import "./index.css"
import {Fragment} from "react"

//Using <Fragment> allows returning multiple sibling elements from the component without adding unnecessary wrapping <div> tags to the HTML structure.

const root=createRoot(document.getElementById("root"));
root.render(
    <Page></Page>
)
function Page(){
    return (
        <Fragment>
            <header>
                <img src="react-logo.png" alt="react-logo" width="40px"></img>
            </header>
            <main>
                <h1>Why I'm excited to learn React!</h1>
                <ol>
                    <li>It's highly employable and used by top companies.</li>
                    <li>The component-based architecture makes building UI clean and reusable.</li>
                    <li>It opens the door to building mobile apps with React Native later on.</li>
                </ol>
            </main>
            <footer><small>© 2026 GRR development. All rights reserved.</small></footer>
        </Fragment>
    )
}