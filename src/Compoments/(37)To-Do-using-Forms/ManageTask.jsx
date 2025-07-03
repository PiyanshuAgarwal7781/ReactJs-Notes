import TaskList from './TaskList'
import TaskCount from './TaskCount'
import AddTask from './AddTask';
import { useState } from 'react';

function ManageTask(){

    let [task,SetTask]=useState([]);
    

    return(
        <div>
            <h2>Manage task</h2>
            <div id="taskid">
            
            <TaskList task={task}  ></TaskList>
            <TaskCount task={task} ></TaskCount>
            <AddTask SetTask={SetTask} task={task} ></AddTask>
            </div>
            

        </div>
    )
}

export default ManageTask;