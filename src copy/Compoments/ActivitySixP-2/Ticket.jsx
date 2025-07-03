import Ticketnum from "./Ticketnum";
function Ticket({ticketArr}){
    return(
        <div id="Ticket" >
            <p>Ticket: &nbsp; &nbsp;  </p>
                {ticketArr.map((num,index)=>(
                <Ticketnum num={num} key={index} />))}
        </div>
    )
}

export default Ticket;