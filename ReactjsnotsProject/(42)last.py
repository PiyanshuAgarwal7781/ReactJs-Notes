# ROUTING ERRORS
# so whenever routing error is occured we use another elemt of react-routing 
# path:
# element:
# errorElement:<new_compoment>
# childern:[{},{}]
# creat a new compoment and supply it
# to get error use {useRouteError}
# let routeError=useRouteError(), it returns an object then display it 

# ASYNC AND AWAIT
# function user(){
# fetch('url')
# .then((res)=>return res)
# .then((user)=>user.json())
# .catch((err)=>console.log(err))
# }

# method two
# async function user(){
# try{
#   let res=await fetch('url')
#   let user=await user.json()
#   }catch(err){}
# }
