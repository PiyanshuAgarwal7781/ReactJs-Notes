function Child(Props){
    return(
        <div>
            <h1>This is Child</h1>
            <p>counter : {Props.counter}</p>
            <button onClick={Props.handleCounter} >++ from child</button>
        </div>
    )
}

export default Child;