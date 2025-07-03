import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
function Rootlayout(){
    return(
        <div>
            {/* <h2>Rooot</h2> */}
            <Header></Header>
            <div  id="placeholder" style={{minHeight:"100vh"}} >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

 export default Rootlayout;