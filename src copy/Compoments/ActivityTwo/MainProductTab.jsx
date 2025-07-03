import Child from "./Child"
function MainProductTab(){
   
    
    return(
        
       
        <div id="mainproducttab" >
           
            <div className="child"><Child  username="LogiTech MsMaster 3x"   index="0" ></Child></div>
            <div className="child"><Child   username="Apple Pencil"  index="1"  ></Child></div>
            <div className="child"><Child  username="Zeb-transformer" index="2"   ></Child></div>
            <div className="child"><Child  username="PhoneCover" index="3" ></Child></div>
            
            
        </div>
    )
}
 export default MainProductTab;