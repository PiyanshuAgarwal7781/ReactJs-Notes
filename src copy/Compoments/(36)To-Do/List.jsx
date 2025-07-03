

function List(props){
   
    

    return(
        <div>
        <h1>This is List</h1>
        <button onClick={props.handleTask} >Add task</button>
        </div>
    )
}

export default List;