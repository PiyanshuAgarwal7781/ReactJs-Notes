import { useState } from "react";

function LOtteryGame(){
    let [array,setarray]=useState([0,0,0]);

    function HandelArray(){
        setarray([Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)])
    }

    
       let  isWinner= array.reduce((current,prev)=>  current+prev);

    return(

        <div>
            
           <h2>The lottery Generated is {array}</h2>
           <button onClick={HandelArray} >Generate Lottery Ticket</button>
           {isWinner===15 && <p>Congo you won </p>}

        </div>
    )
}

export default LOtteryGame;