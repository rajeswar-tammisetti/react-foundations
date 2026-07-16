/**
 * Challenge:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */
/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Data from "./components/data.jsx"
import "./style.css"

export default function App() {
    return (
        <div >
            <Header />

            <div className="entries-list">
                {Data.map((card) => {
                    return(
                        <Entry 
                        key={card.id}
                        img={card.img}
                        title={card.title}
                        country={card.country}
                        googleMapsLink={card.googleMapsLink}
                        dates={card.dates}
                        text={card.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}




