import Home from "./Home"
import Register from "./Register";
import Signup from "./Signup";
import Technologie from "./Technologie";
function Header(){
    return(
        <div>
          
                <ul>
                    <a href="#home">
                        <li> <Home></Home>  </li>
                    </a>
                    <a href="#register">
                        <li> <Register></Register>  </li>
                    </a>
                    <a href="#signup">
                        <li> <Signup></Signup> </li>
                    </a>
                    <a href="#technologies">
                        <li> <Technologie></Technologie> </li>
                    </a>
                </ul>
         
        </div>
    )
}
export default Header;