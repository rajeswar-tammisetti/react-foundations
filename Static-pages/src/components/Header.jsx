export default function Header(){
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
export {Header}