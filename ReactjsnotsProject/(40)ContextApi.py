# state==data,information

# Parent-Child Intresetion: start
# parent can share the infromation to its child only and only parent child intresetion is vaild 
# to overcome more number of sharing we use context api
# context-api store the state in global location, So that any compoment can acces the state.
# Only keep the state required by multiple compoment keep it in context-api
# If any one compoment changes the value present in state, so the context update the value in state used in all compoments 


# steps for creating a context 
# Note: write upto step3 outside of compoment 
# s1: creat a new folder in src, as each state has differnt files 
# s2: creat context obj, by importing {creatcontext}
# s3: use export ContextVarName=creatContext(), and export it 
# s4: creat a state and the assign the stae value to the counter--> let [stateVar,setStateFunc]=useState(10)
# s5: To assign use <CountextVarName.provider value:{{stateVar,stateSetFUnc}}> </CountextVarName.provider>
# s6: use childern {{childern}} as function parameter & <COntextVarName.provider value:{{stateVar,stateSetFUnc}}> {childern} </COntextVarName.provider>
# s7: provide the context to root compoment, to do that go in app file and wrap app in context file <functionName></app></functionName>


# s1: if any compoment want to access the state first import {useContext}
# s2: then import the contextVar in which the context is written
# s3: call the function usecontext(ContextVar) and it return the value to have passed in fileName, best to destructure it 
# s4: Use it 

# to change the login link when someonr is login to web we use conditional statement 
# and when user click on logout, write a func in context which will be updating all three valuse userstatus(null), usererror(null), userstatus(false)
