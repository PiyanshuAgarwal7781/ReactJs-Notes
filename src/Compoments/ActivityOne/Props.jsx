function Props({username,textColor}){
    let styles={color:textColor}
    return(
        <div   >
       <h2 style={styles} > hello {username}</h2>
        </div>
    )
}
 export  default Props;