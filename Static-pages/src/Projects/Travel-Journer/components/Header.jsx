import globeImg from "../src/globe.png"
export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={globeImg} alt="globe-image" />
                <h1>my travel journal.</h1>
            </nav>
        </header>
    )
}