// linkeage should be as discussed if above files called nesting which is used to recuse of files  

//states: process of sending data from one reactjs file to another react js file 

// Syntax:PASSING ARGUMENTS 
// file A: function A(){
// let VaraibleName=100;
//let name="KRISHANA"
// return (
//     <div>
//         <B MedianVaraible={VaraibleWhichIsBeenSending} name={name} ></B>
//     </div>
// )
//}

//File B: function B(RecivedInFOrmOfobject/ObjectName)--> simiral to passing elemts in function 
//{console.log(ObjectName.MedianVaraible);
//console.log(OBjectName.name)
//}
    //   OR
    //  function filename({name,median varaible})--> now we can use this directly 


//The varaible recived transforms itself into an object (use keys to acces the recived elemts) (props.MedianVaraible or props.name)
//To print that on ui(user interface use flower brackets)  {USedVaraibleName.MedianVaraible}

//We can pass as many varaible form one file to another but it is recived by one elemt in reciving file as an object and we can acces it throug keys 

// NUmber of compoments == write number of time recived in recied file in return in from sending file write data one time 
//data in products

//creat array of objects and for each index there is one compoment shown. for more see product and products slide 

//Another method of accepting props 
// we can easily de-structure them function App({title, cost}){
//     return ( <h1>  title  </h1>  <p>  cost  </p>   )
//}



