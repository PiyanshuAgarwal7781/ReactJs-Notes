// General
// in post req we write one then method only to check but in get method we write two then method one form converting to json and another for checking if exist 

const { list } = require("postcss");
const { Link } = require("react-router-dom");


// General:
// . We can store the data using our own created api from json 
// . use json-server --watch db.json in another terimal to start json server  
// . Whenever user is login the account should open the user account
// . process=register(post req)->login(get req)->userProfil    {-> means navigate}
// . Api code for get,update and delete is 200 but for post is 201
// To acces the values stored in json server by id = url/id 
//  Toa access the values by other feild use url?FeildName=


//TO acces values from api:
// . To see the data stored in api we can also use http://localhost:3000/user in our chrome.
// . if you want to acces elemts by id then after user/Id. 
// . The acces of  items is only possible by id but if you want to acces by suppose username we should give it as query. so http://localhost:3000/user?username=piyu. If you want 2 or more values so use &
// . We make http get request  


//-> Get request process: 
//{fetch(`url?username:{username}&password:{password}`,{method:"get"})
// .then(res=>res.json())
// .then(userArray=>console.log(userArray))}
// .catch(err=>console.log(err))
// if the user is existed then the json will send the response in the form of array 
// an if no user exist it will send an empty array
// To navigate we use userArray.length!=0 navigate("/userprofil")
// if error occured setmessage(message:"erroe occured")   and in return use {errmessage.length!=0 && <p>{errmessage.message}</p> (let [errmessage,setmessage]=useState(null))

//Navigation: import {useNavigate} from "./reacthook" ig    
// . To navigate use use  let navigate=useNavigate()
// . So when ever the login is succesful then user data is navigated in the json server and if true(201) then the user is navigated to their account.
// .then(res) {
// if(res.stauts==201){
//     Navigate("/login")     == use " path_name " this is for post req
// }  } 


// Dynamic Updates:
// . after login if we want to dynamically then the url to url/username, in routing give user-profil/:username
// . basically when the url wants to get parameter we use :parameter name
// . after that in navigate use navigate(`username/${array[0].username}`)
// . As in get request the api sends the data on the form of array so acces bu objrecived[0].username


// ->UserLogin:
// . We should make http get request for the data entered 
// . First destruct the data coming when user submit the from using ({username,password})
// . fetch(`http/login/user/?username=${username}&password={password}`,{type:"GET"})
// . to display userinformation on userpage we shoiuld pass the data from login. So we do that by another method of naviggate("/path",{state:userobj})
// . Now in useraccount page import {uselocation} from react router dom 
// . let result=location()


// . Routing for non root compoment:
// .
