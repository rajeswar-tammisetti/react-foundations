/**
 * Challenge:
 * Only display the punchline paragraph if `isShown` is true
 */

import React from "react";
export default function renderJokes(prop) {
    const [isShown, SetIsShown] = React.useState(false);

    function toggleShown() {
        SetIsShown((prevState) => !prevState);
    }

    return (
        <div className="joke">
            {prop.setup && <p className="setup">Setup: {prop.setup}</p>}
            {isShown && <p className="punchline">Punchline: {prop.punchline}</p>}
            {<button onClick={toggleShown}>{!isShown ? "Show" : "Hide" } punchline</button>}
            <hr />
        </div>
    );
}
