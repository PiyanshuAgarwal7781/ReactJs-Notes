import Y from './Y';

function X(){
    let SendingVaraible=100;
    let name="ram"
    return(
        <div className='x'>
            <h2>Hello x</h2>
            <Y s={SendingVaraible} name={name} ></Y>
        </div>
        
    )
}
export default X;