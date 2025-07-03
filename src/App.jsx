//first 2 and half sesions 



// import First from './Compoments/First/FIRST';
// import { FiArrowUp } from "react-icons/fi";
// // nesting lecture 32
// import X from './Compoments/FIRST/x'

// function App(){
//   return(
//     <div>
//       <h2>Jai shree ram</h2>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vero obcaecati necessitatibus, quos natus architecto nobis provident explicabo error repellat ex, exercitationem unde voluptatibus quibusdam consequatur officiis ducimus, quod quo!</p>
//       <button>click me </button>
//       <img src="https://timesofindia.indiatimes.com/photo/msid-80358158/80358158.jpg?resizemode=4" alt="" />
//       <First></First>
//       <FiArrowUp  class='icon' />
//       {/* nesting */}
//       <X></X>
      
//     </div>
//   )
// }
// export default App;


// remiang half lecture 

// import Products from './Compoments/products/Products'
// function App(){
//   return(
//     <div>
//       <Products></Products>
//     </div>
//   )
// }
// export default App;


//Lecture 33: Event handling

// import Handling from './Compoments/UserInteraction/Handling'
// import Statechange from './Compoments/Statechange/Statechange'
// function App(){
//   return(
    
//     <div>hello guys this is app
//       <Handling></Handling>
//       <Statechange></Statechange>
//     </div>
//   )
// }

// export default App;


//Lecture 34: handling state chnage

// import HandlinStateChange from './Compoments/(34)Handlingstatechange/HandlinStateChange'
//  function App(){

//     return(
//       <div>
//         <h1>this is app</h1>
//         <HandlinStateChange></HandlinStateChange>
//       </div>
//     )

//  }
//  export default App;


//lecture 35: child to parent intreaction 

// import Parent from './Compoments/(35)ChildtoparentIntrection(p)/Parent'

// function App(){
//   return(
//     <div>
//       <h1>This is App</h1>
//       <Parent></Parent>


//     </div>
//   )
// }

// export default App;

//lecture 36 :to do 

// import Manage from './Compoments/(36)To-Do/ManageTask'

// function App(){
//   return(
//     <div>
      
//       <Manage></Manage>


//     </div>
//   )
// }

// export default App;

//lecture 36: Forms

// import Forms from './Compoments/(36)Form/Forms'

// function App(){
//   return(
//     <div>
      
//       <Forms></Forms>


//     </div>
//   )
// }

// export default App;


//lecture 37: to do using forms 

// import ManageTask from './Compoments/(37)To-Do-using-Forms/ManageTask'

// function App(){
//   return(
//     <div>
      
//     <ManageTask></ManageTask>


//     </div>
//   )
// }

// export default App;


// //Routing start:
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import RootLayout from "./Compoments/(37)Routing/RootLayout";
// import Home from "./Compoments/(37)Routing/Home";
// import Register from "./Compoments/(37)Routing/Register";
// import Signup from "./Compoments/(37)Routing/Signup";
// import Technologie from "./Compoments/(37)Routing/Technologie";

// function App(){

//   let CreatBrowserObj=createBrowserRouter([
//     {
//       path:"",
//       element:<RootLayout></RootLayout>,
//       children:[
//         {
//           path:'home',
//           Element:<Home></Home>
//         },
//         {
//           path:'Register',
//           element:<Register></Register>
//         },
//         {
//           path:'Signup',
//           element:<Signup></Signup>
//         },
//         {
//           path:'Teacnologie',
//           element:<Technologie></Technologie>
//         }
        
//       ]
//     }
//   ]);


//   return(
//     <div>
//       <RouterProvider router={CreatBrowserObj}></RouterProvider>
//     </div>
//   )
// }

// export default App;



// import MainProps from "./Compoments/MainProps.jsx"

// function App(){
//   return(
//     <div>
      
//       <MainProps ></MainProps>
//     </div>
//   )
// }
// export default App;


// import MainProductTab from "./Compoments/ActivityTwo/MainProductTab"

// function App(){
//   return(
//     <div>
//        <h3 id="apptext" > <b>Products</b> </h3>
//       <MainProductTab></MainProductTab>
//     </div>
//   )
// }
// export default App;



// import LikeBtn from "./Compoments/ActivityThree/LikeBtn"
// function App(){
//   return(
//     <div>
//        this is app
//        <LikeBtn></LikeBtn>
//     </div>
//   )
// }
// export default App;


// import Ludo from "./Compoments/ActivityFour/Ludo.jsx"
// function App(){
//   return(
//     <div>
//       This is App;
//       <Ludo></Ludo>
//     </div>
//   )
// }

// export default App;

// import ToDo from "./Compoments/ActivityFive/ToDo.jsx"
// function App(){
//   return(
//     <div>
     
//       <ToDo></ToDo>
//     </div>
//   )
// }

// export default App;


// import LOtteryGame from "./Compoments/ActivitySix/LOtteryGame.jsx"
// function App(){
//   return(
//     <div>
//      <h2>The Lottery Game Begins</h2>
//      <LOtteryGame></LOtteryGame>
//     </div>
//   )
// }

// export default App;


// import Lottery from "./Compoments/ActivitySixP-2/Lottery.jsx"
// function App(){
//   function iswinner(ticketArr){
//     let con= ticketArr.reduce((prev,next)=> {return prev + next})
//     return con;
//   }
  
//   return(
//     <div>
     
//      <Lottery n={3} winninsCon={15} iswinner={iswinner} ></Lottery>
//     </div>
//   )
// }

// export default App;


// import Forms from "./Compoments/FormsApnaCollage/Forms.jsx"
// function App(){
  
//   return(
//     <div>
//      this is app
//      <Forms></Forms>
//     </div>
//   )
// }

// export default App;



//Routing start Pratice:(38)
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Signup from "./Compoments/(37ROuting pratice)/Signup";
// import About from "./Compoments/(37ROuting pratice)/About";
// import Project from "./Compoments/(37ROuting pratice)/Project";
// import Rootlayout from "./Compoments/(37ROuting pratice)/Rootlayout";
// import Contact from "./Compoments/(37ROuting pratice)/Contact";

// function App(){

//   let CreatBrowserObj=createBrowserRouter([
//     {
//       path:"",
//       element:<Rootlayout></Rootlayout>,
//       children:[
//         {
//           path:'About',
//           Element:<About></About>
//         },
//         {
//           path:'Contact',
//           element:<Contact></Contact>
//         },
//         {
//           path:'Signup',
//           element:<Signup></Signup>
//         },
//         {
//           path:'Project',
//           element:<Project></Project>
//         }
        
//       ]
//     }
//   ]);


//   return(
//     <div>
//       <RouterProvider router={CreatBrowserObj}></RouterProvider>
//     </div>
//   )
// }

// export default App;

//login page (39):

// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Home from "./Compoments/(39)Login/Home";
// import Login from "./Compoments/(39)Login/Login";
// import Project from "./Compoments/(39)Login/Projects";
// import RootLayout from "./Compoments/(39)Login/RootLayout"
// import Signup from "./Compoments/(39)Login/Signup";
// import UserAccount from "./Compoments/(39)Login/UserAccount";
// import KampusKash from "./Compoments/(39)Login/KampusKash";
// import Worldtour from "./Compoments/(39)Login/Worldtour";


// function App(){

//   let CreatBrowserObj=createBrowserRouter([
//     {
//       path:"",
//       element:<RootLayout></RootLayout>,
//       children:[
//         {
//           path:'Home',
//           Element:<Home></Home>
//         },
//         {
//           path:"Signup",
//           element: <Signup></Signup>
//         },
//         {
//           path:'Login',
//           element:<Login></Login>
//         },
//         {
//           path:'Project',
//           element:<Project></Project>,
//           children:[
//             {
//               path:"KampusKash",
//               element:<KampusKash></KampusKash>
//             },
//             {
//               path:"Worldtour",
//               element:<Worldtour></Worldtour>
//             },
//           ]
//         },
//         {
//           path:"UserAccount",
//           element: <UserAccount></UserAccount>
//         },
        
//       ]
//     }
//   ]);


//   return(
//     <div>
//       <RouterProvider router={CreatBrowserObj}></RouterProvider>
//     </div>
//   )
// }

// export default App;

// context api (40)

// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import Rootlayout from "./Compoments/(40)ContexApi/RootLayout"



// function App(){

//   let CreatBrowserObj=createBrowserRouter([
//     {
//       path:"",
//       element:<RootLayout></RootLayout>,
//       children:[
//         {
//           path:'Home',
//           Element:<Home></Home>
//         },
//         {
//           path:"Register",
//           element: <Register></Register>
//         },
//         {
//           path:'Login',
//           element:<Login></Login>
//         },
//         {
//           path:'Project',
//           element:<Project></Project>,
//         },
//         {
//           path:"UserAccount",
//           element: <UserAccount></UserAccount>
//         },
        
//       ]
//     }
//   ]);


//   return(
//     <div>
//       <RouterProvider router={CreatBrowserObj}></RouterProvider>
//     </div>
//   )
// }

// export default App;

// import React from 'react'
// import LoaderPage from './KampusPay/LoaderPage'
// import Register from './KampusPay/Register'
// import Login from './KampusPay/Login'
// import RootLayout from './KampusPay/RootLayout'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// export default function App() {

//   const createBrowserObj = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         { index: true, element: <LoaderPage /> },
//         {
//           path: "Register",
//           element: <Register />,
//         },
//         {
//           path: "Login",
//           element: <Login />,
//         },
//       ],
//     },
//   ]);
  
//   return (
//     <div>
//       <RouterProvider router={createBrowserObj}></RouterProvider>
//     </div>
//   )
// }

// Project campus kash
// import React from 'react'
// import Wallet from './KampusPay/Wallet'
// import Profil from './KampusPay/Profil'
// import Vendors from './KampusPay/Vendors'
// import HomeMulti from './KampusPay/HomeMulti'
// import Home from './KampusPay/Home'

// export default function App() {
//   return (
//     <div>
//       {/* <Profil></Profil> */}
//       {/* <Wallet></Wallet> */}
//       {/* <Vendors></Vendors> */}
//       {/* <HomeMulti></HomeMulti> */}
//       <Home></Home>
//     </div>
//   )
// }

// import React from 'react'
// import Registor from './Compoments/Lecture38,39_Pratice_Login/Registor'
// import Login from './Compoments/Lecture38,39_Pratice_Login/Login'

// export default function App() {
//   return (
//     <div>
//       {/* <Registor></Registor> */}
//       <Login></Login>
//     </div>
//   )
// }

// import React, { Children } from 'react'
// import RootLayout from './MentorBridge/RootLayout'
// // import Home from './MentorBridge/Home';
// // import About from './MentorBridge/About';
// // import Events from './MentorBridge/Events';
// // import Updates from './MentorBridge/Updates';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// export default function App() {

//   let CreatBrowserObj = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         {
//           path: 'Home',
//           element: <Home />
//         },
//         {
//           path: "About",
//           element: <About />
//         },
//         {
//           path: 'Events',
//           element: <Events />
//         },
//         {
//           path: 'Updates',
//           element: <Updates />
//         },
//       ]
//     }
//   ]);

//   return (
//     <RouterProvider router={CreatBrowserObj} />
//   )
// }

import React from 'react'
import RootLayout from './MentorBridge/RootLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './MentorBridge/About'
import Landing from './MentorBridge/Landing';
import Login from './MentorBridge/LOgin';
import Mentor from "./MentorBridge/Mentor"
export default function App() {

  const createBrowserObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        {
          path:"About",
          element:<About></About>
        },
        {
          path:"Login",
          element:<Login></Login>
        },
        {
          path:"Mentor",
          element:<Mentor></Mentor>
        }

      ],
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={createBrowserObj}></RouterProvider>
    </div>
  )
}
