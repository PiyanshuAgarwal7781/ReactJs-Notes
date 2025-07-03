//  only parent child relation is valide in react 
//LiftingStateUp
//Sibling sharing :
//If "A" has to share its state to "B" then the state should be lifted until both "A & B " are connected to common compoment  --> lift state to root compoment 
//Lift state up is when we are having one level 
//Liftingstateup End 

//  General For Routing :
//  for outlet import react-router-dom 
//  outlet basically acts as placeholder 
//  For footer at bottom at page give minheight :100vh for outlet by binding it inside div 
//  For path use /NameOfPath
//  Configuring mean connecting path to the compoment.
//  For configuring import creatBrowserRouter from react-router-dom
// . import {outlet} from react router dom.
// . import {creatBrowserRouter,routerProvider} from react-router-dom (for creating routing compoment)


//Routing start:
// In routing a spefic componet is loaded depending upon the user selection 
// Ex: image from asset --> if user click on home then  home is loaded/signup is loaded/contact is loaded

//Steps:
//S1: Creat compoments 
//S2: creat rootLayout of compoment (refer img in assestcs ) (for example arranging the compoments in as we did in html first header then body then footer )--> creat new compoment for this 
//s2 syntax:
//header
//<div stydle:{{minHeight:100vh}}></outlet></div>
//footer

//S3: usually in body we write the placeholder-- write in app.jsx
// Placeholder: the compoment selectd by the user is displayed here (placeholder==body)
// For place holder we use <outlet></outlet> by importing outlet from react-router-dom 

//S4: creat and provide browserRouter to application (configureing mean connecting path to compoment ) --> write in app.jsx

//for creating routing import {creatBrowserRouter,routerProvider} from react-router-dom
// let browseRouterObj=creatBrowserROuter([])
//   return(
//   RouterProvider router={browserRouterObj}
//           )
//routerProvider contains property Router={which take browseRouterObj}

//creatBrowserRouter conatin an array where we write the configuration 
//creatBrwoserRouter([configuration])
//it is array of objects 
//each object conatins path: and element:

// createBrowserRouter([
//     {
//         path:"NameofPath";
//         element:<NameOfElement></NameOfElement>
//         Children:[
//              {
//               path:"Home",
//               elemet:<Home></Home>      
//                  },
//              {further elemts}, 
//         ]
//     }
// ])
