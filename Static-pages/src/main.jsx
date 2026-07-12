import {createRoot} from "react-dom/client"
import {Fragment} from "react"

/*
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 *
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */
const root=createRoot(document.getElementById("root"));
root.render(
    <Page></Page>
)
function Header(){
    return(
        <header className="header">
            <img src="react-logo.png" alt="react-logo" width="40px" className="nav-logo"></img>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
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