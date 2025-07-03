import {useForm} from 'react-hook-form'
function Froms(){
    let {register,handleSubmit,formState:{errors}}=useForm();

     function handleFormSubmit(obj){
        console.log(obj);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)} >
                <div id="user">
                <label htmlFor='username' >username</label>
                <input type="text" {...register('username',{required:true,minLength:4})}  id="username" />

                {errors.username?.type==="required" && <p>Username is required </p> }
                {errors.username?.type==="minLength" && <p>minimum lrngth is reuired  is 4 </p>  }

                </div>

            <div id="email">
                <label htmlFor='email' >email</label>
                <input type="text" {...register('email')}  id="email" />
                </div>

                <div id="selesctskills">
                    <select {...register('select')}  >
                        <option  >css</option>
                        <option  >js</option>
                    </select>
                </div>

                <div id="feedback">
                    <label htmlFor="feedback">Feedback</label>
                   <textarea  {...register('textarea')}></textarea>

                </div>
                <div id="btn">
                    <button>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Froms;