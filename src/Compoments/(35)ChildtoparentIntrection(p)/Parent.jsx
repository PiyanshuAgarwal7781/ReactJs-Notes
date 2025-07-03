import { useState } from "react";
import Child from '../(35)childtoparent(c)/Child'

function Parent(){

    let [counter,setcounter]=useState(0);

    function handleCounter(){
        setcounter(counter+1);
    }

    return(
        <div>
            <h1>This is parent</h1>
            <p>counter:{counter}</p>
            <button onClick={handleCounter} >++</button>
            <Child counter={counter} handleCounter={handleCounter} ></Child>
        </div>
    )
}

export default Parent;