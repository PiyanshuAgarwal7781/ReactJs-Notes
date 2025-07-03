import { useState } from "react"

function LikeBtn(){
    let [isCLick,setClick]=useState(1);
    function handelclick(){
        setClick(isCLick+1);
        console.log(isCLick);
    }
    let falseclick={
        backgroundColor:"green",
    }
    let trueclick={
        backgroundColor:"red",
    }
    return(
        <div>
            <h2>count:{isCLick}</h2>
            {isCLick%2==0? <button  style={falseclick} onClick={handelclick} >Click me </button> : <button style={trueclick} onClick={handelclick} >Click me </button>   }
            
            
        </div>
    )
}

export default LikeBtn;
//we can use true and flase for toggle 