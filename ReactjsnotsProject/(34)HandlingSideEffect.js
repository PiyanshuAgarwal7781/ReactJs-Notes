// General:
// First import useSIdeEffect form react using suntax ---> import{useEffect} from 'react'
// useEffect returns nothing 

//SideEffect Start:
// Stops renduring of comoment hence react component waits for completion 
// Whenever the react application is intracting with outside world so we dont know when it will fetch and give us the data
//Ex: API,Makiing https request, DOm manuplation    
// To overcome above problem we use useEffect hook functions 
// useEffect take two arguments they are 1)A function which deals with sideEffect 2)Dependency array
// useEffect(
// ()=>{},--> function for effect
//[] --> dependency array
//)

//when use EffectHook:
//1) useEffect excutes only after initial renduring of a compoment 
//2) EffectFUnction will excute evertime when the state is chnaged 
//3) If the second arrgument is empty arry then useEffect is only renduring once  
//4)**** If we keep any varaible in dependency array then when the state of that parameter is changed then only the USeeffect hook is excuted 

//Syntax
// function HandlingsideEffects(){
//let [counter1,setcounter1]=useState(100);
//let [counter2,setcouunter2]=useState(200);
//
/// useEffect(
//        ()=>{
//        consolelog("this is is printed when one of above condition are done");}
//            ,[counter1])
// function handleConutter1(){
//      setcounter(counter1+1);
//       }
// function handleConutter2(){
//      setcounter(counter2+1);
//       }
//
// return(
// <div>
//  btn1 
//  btn2
// </div>  )
//}


//sir tried with real api .then() .then()  .catch("i guess it catches the error ")
//Error is always an object useState(null)-> represent nothing 
