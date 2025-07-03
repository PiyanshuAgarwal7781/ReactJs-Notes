import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
function RootLayout(){
    return(
        <div>
            <h2>RootLayout</h2>
            <Header></Header>
            <div id="placeholder" style={{minHeight:'100vh'}}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default RootLayout;