
function handleClick(){
    console.log('the button was clicked');
}
 function handleWithParameter(i){
    console.log("This is button with click statement,And button  is clicked ",i)
    
 }

function Handling(){
    let i=1;
    return(
        <div>
            <h2>This is Handling FUnction </h2>
            <button onClick={handleClick}>CLick me</button>
            <button onClick={()=>handleWithParameter(i++)}>Anotehr click button</button>
        </div>
        
    )
    
}
 export default Handling;