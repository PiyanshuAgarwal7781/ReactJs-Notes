import { useForm } from "react-hook-form";

function Forms(){
    let  {register,handleSubmit,formState:{errors},reset}=useForm();
    function handleFormSubmit(Form){
        console.log(Form)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}  >
                <div id="Username">
                    <label htmlFor="username">Username</label>
                    <input {...register('username',{required:"true",minLength:3})} type="text" placeholder="Enter username" id="username" />
                    {errors.username?.type==="required" && <p>Enter the username</p> }
                    {errors.username?.type==="minLength" && <p>Enter the minLength </p> }
                </div>
                <div id="Emial">
                    <label htmlFor="email">Email id </label>
                    <input {...register('email')} type="email"  placeholder="Enter email"  id="email" />
                </div>
                <div id="Skills">
                    <label htmlFor="skills">Select skills</label>
                    <select name="skills" id="skills" {...register("skills")} >
                        <option value="css">css</option>
                        <option value="html">html</option>
                        <option value="javascript">javascript</option>
                    </select>
                    <div id="dob">
                        <label htmlFor="DOb">enter dob</label>
                        <input type="date" {...register("dob")} />
                    </div>
                    <div id="password">
                        <label htmlFor="Password">ENter the password</label>
                        <input type="password" {...register("password")}  id="Password"/>
                    </div>
                    <div id="newtype">
                        <label htmlFor="text">Feedback</label>
                        <input type="text" {...register("text")}  id="text" />
                    </div>
                    
                </div>
                <button>Submit Form !</button>
            </form>
        </div>
    )
}
 
export default  Forms;