import { Link } from "react-router-dom";

function Header(){
    return(
        <div id="headerrouting" >
        <ul>
            <Link to="About">
                <li>About</li>
            </Link>
            <Link to="Contact">
                <li>Contact</li>
            </Link>
            <Link to="Signup">
                <li>Signup</li>
            </Link>
            <Link to="Project">
                <li>Project</li>
            </Link>
        </ul>
        </div>
    )
}

 export default Header;