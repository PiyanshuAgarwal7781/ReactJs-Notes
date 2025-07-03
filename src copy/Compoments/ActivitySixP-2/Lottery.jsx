import { useState } from "react";
import Ticket from "./Ticket";

function Lottery({n,winninsCon,iswinner}){

    let [ticketArr,setticketArr]=useState(generateTicket(n));
    let condition=iswinner(ticketArr);

    function generateTicket(n){
        let arr= new Array(n);
        for(let i=0;i<n;i++){
            arr[i]=Math.floor(Math.random()*10);
        }
        return arr;
    };

    function handelTicketBuy(){
       setticketArr( generateTicket(n) );
    };

   let arrsum= ticketArr.reduce((prev,sum)=> {return prev+sum} );


    return(
        <div id="Lottery" >
            <h2> Lottery Game Begins </h2>
            <Ticket ticketArr={ticketArr}  ></Ticket>
            <button onClick={handelTicketBuy} > Buy Ticket! </button>
            {arrsum==winninsCon && <p>Congo </p>}
            {condition===15 && <p>dhoni</p> }
            
            
        </div>
    )
};


export default Lottery;