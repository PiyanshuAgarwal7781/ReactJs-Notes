
import { useLocation } from 'react-router-dom'

function UserAccount  () {
 
  let {state}=useLocation(); 
   console.log(state[0].username);
  return (
    <div>
      <h2>UserAccount</h2>
      <p>{state[0].username}</p>
    </div>
  )

}

export default UserAccount
