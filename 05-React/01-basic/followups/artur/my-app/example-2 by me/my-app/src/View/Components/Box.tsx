
interface BoxProps{
    photo : string,

}
const Box =  (props:BoxProps) =>{
    const {photo,} = props

    return(
        
        <div className="card" >
            <div className= "card_Img" >
                <img src={photo}/>
            </div>
            
            
        </div>

    )

}
export default Box