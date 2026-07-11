import {createRoot} from "react-dom/client"
import "./index.css"
import {Fragment} from "react"

/** Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 
 * Move the `main` element into its own component called "MainContent" 
 * and render that component inside the Page component.
 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
*/

const root=createRoot(document.getElementById("root"));
root.render(
    <Page></Page>
)
function Header(){
    return(
        <header>
            <img src="react-logo.png" alt="react-logo" width="40px"></img>
        </header>
    )
}
function MainContent(){
    return(
        <main>
            <h1>Why I'm excited to learn React!</h1>
                <ol>
                    <li>It's highly employable and used by top companies.</li>
                    <li>The component-based architecture makes building UI clean and reusable.</li>
                    <li>It opens the door to building mobile apps with React Native later on.</li>
                </ol>
        </main>
    )
}
function Footer(){
    return (
        <footer><small>© 2026 GRR development. All rights reserved.</small></footer>
    )
}
function Page(){
    return (
        <Fragment>
            <Header />
            <MainContent />
            <Footer />
        </Fragment>
    )
}