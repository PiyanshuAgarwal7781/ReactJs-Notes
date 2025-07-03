function TaskCount(props){
    return(
        <div>
            <h2>Task Count</h2>
            <p>{props.task.length}</p>
        </div>
    )
}

export default TaskCount;