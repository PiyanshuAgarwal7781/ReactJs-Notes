import List from './List'
import Count from './Count'
import Addtask from './Addtask';
import { useState } from "react";

function ManageTask(){


    let [task,settask]=useState([]);

    function handleTask(){

        let newtask=Math.random();
        settask([...task,newtask])
    }
    console.log(task)
    
    return(
        <div>
        <h1>Add task below </h1>
        <div id="taskdiv" >
        <Count task={task}></Count>
        <List handleTask={handleTask} ></List>
        <Addtask task={task}></Addtask>
        </div>
        </div>
    )
}

export default ManageTask;