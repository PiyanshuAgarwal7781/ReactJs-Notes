import { useForm } from "react-hook-form";
// // json-server --watch db.json
let url="http://localhost:3000/user";
function Signup(){
    let {register,handleSubmit}=useForm();
    function handleformSubmit(userobj){
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(userobj),
        })
    }
    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit(handleformSubmit)} >
                <div>
                <label htmlFor="username">username:</label>
                <input defaultValue="ram"  {...register('username')} type="text" name="" id="username" />
                </div>
                <div>
                <label htmlFor="email">email:</label>
                <input  defaultValue="hanuman@gmail.com"  {...register("email")} type="email" name="" id="email" />
                </div>
                <div>
                <label htmlFor="password">password:</label>
                <input  defaultValue="hello" {...register("password")} type="password" name="" id="password" />
                </div>
                <div>
                <label htmlFor="dob">dob:</label>
                <input  {...register("dob")} type="date" name="" id="dob" />
                </div>
                <button>Submit!</button>
            </form>
        </div>
    )
}

 export default Signup;