//General:
// Follow the uppar camel case for filename and function name 
// To display javascript varaible on webpage we use -->flower brackets {varaibleName}
// TO show varaible of javascript :
// funtion functionNAme(){
//     varaible name=10;
// return (
// {varaible name})
// } 
// React fragments --> <> This is similar to div but in dom this does not creat any extra rootcompoment  </>
//***to display array we use map method*** 

//Compoments:
// A component can be created by two ways either by class or by function 
// Each funtion should return only one elements. 

// compoment creat
//IMP: TO return multiple react compoments use option of div 
//syntax
//return(
// <div>
// MULTIPEL ELEMENTS
// </div>
//)


//IMP:after creating new compoments link it in hiarchhy or it will be ignored
//Steps:
//s1: export the new compoment 
//s2: import it using syntax import Name from 'locationFromWhereItISExported'
//s3: now in return elemts add the impoted file name 
//import First from './Compoments/FolderNAme/FIleName';
//s4:Use below method to add it 
//funtion {
// return (<First></First>)   }

// IMAGES:
// For images Same as html compoments if has to be copied from online 
// IF images as persent in our system store in asseects folder  use import 
// syntax is import AnyVaraibleName(img1,img2...) from 'location'
// In return use--> src={VaraibleName}  

// ICONS:
//For icons use react icons paste same as import. 
//Use each icon as compoment so paste teir varaible name return 
//use react icon on google


//New type of compoment 

//function title(){
//      <h2>This is title h2 But this is not file </h2>          
//              }

//function App(){
//   return(
//      <div><h1>This is h1</h1></div>   
//          <title/> --> we use this here this is called renduring         )
//}


