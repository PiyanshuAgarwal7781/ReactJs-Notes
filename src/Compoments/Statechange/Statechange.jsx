import { useState } from 'react';



function StateChange() {
    let a = "state text is ";
    let b=10; 
    let [c, setC] = useState(7);
    let [person,setperson]=useState({id:1,fullName:"piyanshu",city:"hyderabad",});
    let [Arr,setarray]=useState(['css','js','html']);

    let [newele,setnewele]=useState(0);


    function handleChange() {
        console.log(b);
        b++;
    }

    function working() {
        setC(c + 1); 
    }

    function handleObject(){
        setperson({id:1,fullName:"piyanshu",city:"hyderabad",id:3,fullName:"akshi",city:"kannuaj"});
    }
    function handleArr(){
        setarray([...Arr,"cpp"])
    }
    function handleArrRemove(){
        let newArr=['css','js','html'];
        newArr.pop();
        setarray(newArr);
    }

    function handleneweleincrement(){
        setnewele(newele+1)
    }

    function handleneweledecrement(){
        setnewele(newele-1)
    }

    function handlenewelereset(){
        setnewele(-2)
    }
    return (
        <div id="return" >

            <h2>This is state change </h2>
            <h2>{a} {b} </h2>
            <button onClick={handleChange}>Used to change state NP</button>
            <h2>{c}</h2>
            <button onClick={working}>Working button of state change</button>


            <div id="personobj" >
                <h1>Object state change</h1>
                <h2>{person.id}</h2>
                <h2>{person.fullName}</h2>
                <h2>{person.city}</h2>
                <button onClick={handleObject} >Change object</button>
            </div>


            <div id="arraystate">
                <h1>Now array</h1>
                <h2>{Arr[0]}</h2>
                <h2>{Arr[1]}</h2>
                <h2>{Arr[2]}</h2>
                <h2>{Arr[3]}</h2>
                <button onClick={handleArr}>array state button</button>
                <button onClick={handleArrRemove}>TO delet an element</button>
            </div>

            <div id="question">
                <h1>This is question</h1>
                <h2>{newele}</h2>
                <button onClick={handleneweleincrement} >INcrement</button>
                <button onClick={handleneweledecrement} >Decrement</button>
                <button onClick={handlenewelereset}  >Reset</button>
            </div>
            

        </div>
    );
}

export default StateChange;
