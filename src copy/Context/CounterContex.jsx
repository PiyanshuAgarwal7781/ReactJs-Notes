//As value uses two flower bracket because only for it is js value and second for beacuse it is object 

import { createContext } from "react"
import { useState } from "react";
export let counter_context=createContext();

export default function CounterContex({children}){

    let [counter,setcounter]=useState(100);

  return (
    <counter_context.Provider value={{counter,setcounter}}>
        {children}
    </counter_context.Provider>
  )
  
}
