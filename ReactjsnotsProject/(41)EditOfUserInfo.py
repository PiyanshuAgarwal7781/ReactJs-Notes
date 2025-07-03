# so after the user has login into the website, if he want to change the info. we provide a button to change 
# so whenever the user cliks the button the editstaus turns(write a func) true and a form should be displayed on scrren. so that user can update the info  (for from use conditonal )
# so when form appers it should not be empty it should be filled with user existed info 
# for that we use {register,handlesubmit,setValue}=useForm()
# give setvalue in func using setvalue('username',currentuser.username) @here curretnuser is obj which has all info stored. 
# if you dont want to chnage the value upon edit use disabled in inout feild <input type="text" {...register('username') disabled}/>
# when user edits the info make update(PUT,patch) request to api


# put vs patch
# put: use when you want to update complete details
# patch: use when you want to update partial details


# to make patch requets make api call by sending the id (currentuser.id)
# fetch(`http://localhost:3000/user/${currentuser.id}`,{
# method:"PATCH",
# headers:{"Content-Type":"aplication/json"}
# body:JSON.stringy(fucn in which the value are coming {onsumbit func}(edituserfunc) )
# })   
# .then((res)=>return res.json())
# .then((editeduser)=>
# setcurreuser(editeduser)
# seteditstatus(false)
# )  @usually the setcurrentuser is a func written in contecxt
# .catch((err)=>console.log("err occuredb"))
