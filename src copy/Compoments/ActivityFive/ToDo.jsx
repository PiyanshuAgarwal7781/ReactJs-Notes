import { useState } from "react";

function ToDo(){
    let [task,settask]=useState([1]);
    let [todo,settodo]=useState("");
    function handelTask(){
        settask([...task,Math.floor(Math.random()*7)])
    }
    function handelTodo(event){
        settodo(event.target.value);
        console.log(event.target.value)
    }
    function handelDeleteTask(index){
      let updatedtask=[...task];
      updatedtask.pop();
      task=updatedtask;
      settask(task);
    }
    function handelRandomDelete(index){
        let randomtaskdelete=[...task];
       console.log( randomtaskdelete.filter((randomtaskdelete)=> randomtaskdelete[index]!=task[index]));
        task=[...randomtaskdelete]
        console.log(task)

    }
    return(
        <div>
           <div id="task">
          <p> To-Do Application </p>
            <input  type="text" value={todo} placeholder="Enter the task " />
            <button onClick={handelTask} onChange={handelTodo}  >Add Task</button>
            <br />
            <br />
            <br />
            <h4>The task are </h4>
            { task.map((task,index) =>   <li key={index} >{task} <button onClick={()=> handelDeleteTask(index) } > Delete Last Task </button> <button onClick={()=>handelRandomDelete(index)} >Delet random task </button> </li>  )}
           </div>
        </div>
    )
}

export default ToDo;