//General arr.every((num)=> num===arr[0] )
//To check that all numbers are equal 

// . we can also write css styling in jsx file directly 
// . let stylesInJsx : { backGroundColor: "yellow" }
// . <div style={stylesInJsx}></div> --> by this style is applied to entire div which is been returened as compoment 

//Conditional styling:
// suppose if we want to apply style only to those elemts which are eligble for discount if price is greater than 3000 then we can follow the below syntax 
//let styles={backgroundColor: price>30000? "red" : "yellow" }

// . To delete the items in array we use filter method 
// . For this is use npm install uuid 
// . import {V4as uuidv4} from 'uuid'
// . Now the in todo we dont give and empty string/array we give an oject which have { task:" " , id: uuidv4() } as parameter
// . or use index as-----> key best

//Compoments :
//Further there are two types of comoments they are logical(smart) and presentional(dumb) compoments
//logical compoments have state in them means some logic is wriiten to change the varaible where as the presentional compoment dont have any state in them they just print the information on ui 
//state varaibles can be passed as props in presentional compoments but they are not considered to be logical 
//Ex lottery ticket hirecay in---- image 
//A code contain both compomets 

//While desiging any compoments have a clarity of these three things 
//1: props: varaibles coming as props  
//2: state: varaibles on which state is applied  
//3: events: Event on state 

//Function as props
//js funcitons are similar to firs class props 
//This means they can be passed to a function as argument can be returned from it and can be assigned to a varaible 


// use index true in roting for first elemst 
// use /for routing inside child