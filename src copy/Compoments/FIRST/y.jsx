import Z from './Z';

function Y(NewVaraible){
    console.log(NewVaraible);
    return(
        <div className='y'>
            <h2>Hello Y</h2>
            <h2>dat from x.jss is {NewVaraible.s}</h2>
            <h2>name form file x is {NewVaraible.name}</h2>
            <Z></Z>
        </div>
        
    )
}
export default Y;