import Price from "./Price"
import Description from "./Description";
function Child({username,index}){
   let oldprice=["12,495","11,999","1,600","500"];
   let  newprice=["8999","9,100","899","200"];
   let info=["8000Dpi","DEsgined for apple pro","Good Toouch Surface","Eye catching "] 

    return(
        <div>
           <Description username={username} info={info[index]} >  </Description>
            <Price oldprice={oldprice[index]}  newprice={newprice[index]}  ></Price>
            
        </div>
    )
}

export default Child 