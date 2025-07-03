//General: 
// To use hookFunctions import it --> import {useState} from 'react'
// Every time you are chnageing state of an object and array first creat copy in setObject(...ObjectName)

//Event handle start:
//If you want to handle any event you must have eventHandling function 

//syntax:
//funvtion handleFunctionNameOfEvent(){-----> this is event function
// console.log("The button is clicked once ");
//}

// function FunctionNameOfFile(){
// return(
//     <div>
//         <button onclick={handleFunctionNameOfEvent} > click me </button>
//     </div>
//   )
//} 

//######
//For parameterised function we use one arrow functin to call another function 
// functoin anotherclick(Parameter){
//console.log("this is anotehr event ")
//}
//
// function FunctionNameOfFile(){
// return(
//     <div>
//         <button onclick={()=>anotherclick(parameter)} >another click me </button>
//     </div>
//   )
//} 
//handle end


//Hooks start:
// HandlingStatechange
// We use hook functions to change values of any varaible which are displayed on userinterface(ui)
// This hookfunctions return array of two elemts [stateVaraible, setVaraibleFunction]= useState(initialState)
// We can pass number, strings, arrays, objects.

//syntax:
//function filename(){        
// let [a,SetA]=useState(10); (means a=10)
//function handleFunctionOfEvent()
//{
//console.log(a);
// SetA(a++);
//}
// return(
//     <div><button onclick={handleFunctionNameOfEvent}>Register</button></div>
//   )
//}
// From above synatx a will change in ui also 

// ###
// . While adding and new elemt in array for state change first copy the array and [...Arrayname, Newelement]
// . While deleting let NEwArray=[...OLdarray]; NEwarray.pop()

//while we are passning function as initial value in useState(function())--> do not call the function using () beacuse it will excuite every time the event is occured incase we just just pass function name without brackets 
// useState(functionName)--right
// useState(functionName())--wrong 