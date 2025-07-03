//General:
// for copy make ... dots and name of object,array etc
// for textarea for feedback
// for btn type use submit in case of form submission(or in form button default acts as submit type ) 
// for form use tag form  <form> label /n input  </form>
// use label for name of the particular input feild and bind label and input feild inside a div
// eventprevent.default()--> first add event varaible as reccived in btn function 

//Forms:start(R,HS,FS)
// we use external applicaton for submission of form in react, this is object 
//let {register,handleSumit,formState:{errors}}=useForm();

//steps:
// S1: First register it in all input feild {...register('InputName')}
// s2: creat a new function handleFormsubmit 
// s3: In form tag give onsubmit= {handlesubmit(HandleFormSubmit(Obj))}

//Forms validation :
// . Required: we should fill this, if empty then form is not submitted. 
// . minlength and max length : length of string 
// . pattern:Number of uppar case lower casr and special characters 
//process:
//Now register will take two arguments {...register('username',{required:true, minLength:4, maxLength:9})}
//Forms end and Form Validation end:


//->error message start: 
// const {register,handleSubmit,formstate:{error}}
// Formstate is itself an object 
// when ever if any above condition is not sastified then you should display an error message for that we use-hook-from have given another attribute along with register handleSubmit that is formState
// formState is an object formstate:{error}
// {error.username?.type==='required' && <p>username is required </p>}
// error end: 
 