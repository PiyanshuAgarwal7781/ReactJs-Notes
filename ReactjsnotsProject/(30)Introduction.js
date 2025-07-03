// General:
// whenever we see a already existing page break down it into small compoments 
// while passing js(varaibles) numbers as arguments we should wrap them inside a curly braces then only it is treated as a  js varaible        
// number  ex: price-> {2000}
// Incase a compoment is not passing a child suppose price so to set the default value ({title, price=1})
// The above syntax will take price = 1 when it wont get anything

// main.jsx is the first file excuted whenever react is running  


// compoments-->start:
// USUALLY AS FUNCTIONS ARE USED TO REDUCED LINES OF CODE AND ARE INVOKED WHEN NEEDED, SIMIRALLY IN REACTJS COMPOMENTS ARE USED WHICH REDUCES THE LINE OF CODE IN HTML 
// COMPONENTS CAN BE AS SMALL AS BUTTON OR CAN BE AS LARGE AS ENTIRE PAGE JUST CREAT oNE COMPONENTS AND USE THEM HOW MANY TIMES NEEDED

// * SYNTAX-- 
// FUNCTION functionName(inputs){
//     return (react elemts)
//}

//whenever a react component is created it gives us one component in it called as root component(app.jsx). which is connected to indx.html


// GENERAL: 
//Map method is used to renduring array in jsx 
//syntax : arrayNAme.map((val,index)=> <h2>  index  </h2>)

//condition in js
//usual syntax : conditon? true: false 
// {isApplicable= price>=3000 ? "yes idscount " : null}
//{isApplicable= price>=3000 && "yes idscount "}--this excuites ony when the first condition is true 

//null passes nothing used when pop up message in forms  