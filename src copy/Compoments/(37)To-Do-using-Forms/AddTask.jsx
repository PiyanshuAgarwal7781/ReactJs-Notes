
import {useForm} from "react-hook-form"

function AddTask(props){ //props: handleAddTask:f

    
    let {register,handleSubmit,reset}=useForm();

    function  handelAddTask(obj){
        props.SetTask([...props.task,obj]);
        reset();
        }
        console.log(props.task)
   



    return(
        <div>
            <h2>Add task</h2>
            <form  onSubmit={handleSubmit(handelAddTask)} >
                <input type="text" {...register("newtask")}  placeholder="Add task " />
                <button type="submit">Enter task </button>
            </form>

        </div>
    )
}

export default AddTask;