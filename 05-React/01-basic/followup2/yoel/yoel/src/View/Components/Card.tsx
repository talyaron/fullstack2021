interface propCard{
    img:string
    name:string
}
//we need to write prop with {}
function Card(prop:propCard) {
    return (
        <div className="card">
            <h1>{prop.name}</h1>
            <img className='card_pic' src = {prop.img}/> 
            <img className='card_pic' src = {prop.img}/>
            <img className='card_pic' src = {prop.img}/>
        </div>
    )
}
export default Card;