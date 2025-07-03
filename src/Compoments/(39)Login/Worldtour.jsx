import React from 'react'
import { useContext } from 'react'
import { counter_context } from '../../Context/CounterContex'



export default function Worldtour() {
  let {counter,setcounter}=useContext(counter_context);
  function handlecounter(){
    setcounter(counter-1);
  }
  return (
    <div>
      <h2>wt</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique facilis natus voluptatibus id molestias unde sint quod recusandae dolor. Consequuntur tenetur maxime facere accusantium. Cumque reiciendis quaerat necessitatibus assumenda.</p>
      <p>{counter}</p>
      <button onClick={handlecounter} >decrement</button>
    </div>
  )
}
