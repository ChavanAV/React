import "./css/nav.css"
import { FaSearch, FaDesktop } from 'react-icons/fa';
let NavBar = () => {
    return (
        <nav id="navbar">
            <div id="icon">
                <FaDesktop size={50} />
                <div id="logotext">
                    <div>Business</div>
                    <div>Webinar</div>
                </div>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Campaign</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div id="search-bar">
                <FaSearch size={20} />
                {/* <input id="ip" type="text" /> */}
            </div>
        </nav>

    )
}

export default NavBar;