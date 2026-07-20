import chefLogo from "../src/chef-icon.png";
export default function header() {
    return (
        <header>
            <img src={chefLogo} alt="chef-logo" />
            <h1>Recipe Craft</h1>
        </header>
    );
}
