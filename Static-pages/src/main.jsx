import {createRoot} from "react-dom/client"
import "./index.css"

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

const root=createRoot(document.getElementById("root"));
root.render(
    <Page></Page>
)
function Page(){
    return (
        <div>
            <header><img src="react-logo.png" alt="react-logo" width="40px"></img></header>
            <main>
                <h1>Why I'm excited to learn React!</h1>
                <ol>
                    <li>It's highly employable and used by top companies.</li>
                    <li>The component-based architecture makes building UI clean and reusable.</li>
                    <li>It opens the door to building mobile apps with React Native later on.</li>
                </ol>
            </main>
            <footer><small>© 2026 GRR development. All rights reserved.</small></footer>
        </div>
    )
}