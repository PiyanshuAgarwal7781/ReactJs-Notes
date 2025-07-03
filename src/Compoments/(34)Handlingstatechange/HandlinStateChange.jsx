import { useEffect } from "react";
import { useState } from "react";

function HandlinStateChange(){
    let [counter1,setcounter1]=useState(0);
    let [counter2,setcounter2]=useState(0);

    useEffect(
        ()=>{
            console.log("hello this is effect function  ")
        },[counter1]
    )

    

    function handleCounter1(){
        setcounter1(counter1+1)
    }

    function handleCounter2(){
        setcounter2(counter2+1)
    }

    return(
        <div>
        <h1>This is handling Compoment</h1>
            <h2>Counter1 :{counter1}</h2>
            <button onClick={handleCounter1} >Counter1</button>

            <h2>Counter2 :{counter2}</h2>
            <button onClick={handleCounter2} >Counter2</button>
        </div>
    )
}

export default HandlinStateChange;