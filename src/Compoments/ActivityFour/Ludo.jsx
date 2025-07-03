import { useState } from "react";

function Ludo(){
    let [moves,setMoves]=useState({red:0,yellow:0,green:0,blue:0});

    function HandleMOvesb(){
        setMoves({...moves, blue: moves.blue+1})
    }
    function HandleMOvesg(){
        setMoves({...moves, green: moves.green+1})
    }
    function HandleMOvesy(){
        setMoves({...moves, yellow: moves.yellow+1})
    }
    function HandleMOvesr(){
        setMoves({...moves, red: moves.red+1})
    }

    return(
        <div>
            <h2>Game Begins!</h2>
            <div id="ludoGame">
                <p>Blue moves:{moves.blue}</p>
                <button onClick={HandleMOvesb} style={{backgroundColor:"blue",width:"100px",color:"white"}} >+1</button>
                <p>green moves:{moves.green}</p>
                <button  onClick={HandleMOvesg} style={{backgroundColor:"green",width:"100px",color:"white"}} >+1</button>
                <p>Blue yellow:{moves.yellow}</p>
                <button onClick={HandleMOvesy} style={{backgroundColor:"yellow",width:"100px",color:"black"}} >+1</button>
                <p>red moves:{moves.red}</p>
                <button onClick={HandleMOvesr} style={{backgroundColor:"red",width:"100px",color:"white"}} >+1</button>
            </div>
        </div>
    )
}

export default Ludo;