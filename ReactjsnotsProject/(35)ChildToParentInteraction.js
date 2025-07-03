//General:Np

//Child to Parent INteraction: start
// parent to child interaction is direct just a prop.
// But for child to parent intreaction an event should be occured in child to transfer to parent 

//Lifting stateup usually we use lifting state up when we want to share state but the react files are not connected to each other directly 
// So our setp1 will be to lift the state up until we have a common connected parent with react file 
// For reference see assects folder 

// explation : if state is present in "F" and transfered to "G" then first lift the state to "c" as it common connected 
//2) "F" to "A" : lift state to "c" from "c" lift state to "Root compoment "