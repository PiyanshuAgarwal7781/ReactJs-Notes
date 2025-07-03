function Addtask(prop){
    return(
        <div>
        <h1>This is Add</h1>
        {
        prop.task.map(t=><p>{t}</p>)
}
        </div>
    )
}

export default Addtask;