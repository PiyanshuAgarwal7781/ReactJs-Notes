import { MdHeight } from "react-icons/md"

function Price({oldprice,newprice}){
    let oldstyle={
        textDecorationLine:"line-through"
    }
    let newstyle={
        fontSize:"large"
    }
    let styles={
        backgroundColor:"yellow",
        height:"50px",
        borderRadius:"20px",
        textAlign:"center",
    }
    function onclick(){
        console.log("clicked")
    }
    return(
        <div style={styles} > 
            <span style={oldstyle} >{oldprice}</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span style={newstyle} >{newprice}</span>
            <button onClick={onclick} >click me </button>
            
        </div>
    )
}

export default Price