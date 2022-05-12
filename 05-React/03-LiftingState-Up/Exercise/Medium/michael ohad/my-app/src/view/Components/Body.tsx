interface card {
    text: string;
    img: string;
    id: string
  }

interface CardProps{
    arr:Array<card>;
}





const Body = (props:CardProps) => {

    const {arr}= props;
    function getId(ev:any){
        console.log(ev.id);
    }
    
  return (
    
    <div className='arr'>
          {arr.map((card, i) => {
            return (

              <div key={i} id={card.id} className='card' onClick={getId}>


                {/* <button onClick={() => handleDelete(card.id)}>delete</button>
                <button onClick={() => handleupdateText(card.id)}>update text</button>
                <button onClick={() => handleupdateImg(card.id)}>update img</button> */}


                <div id={'1'} className="cardHeader"><p>{card.text}</p></div>
                <div id={'1'} className="cardImg"><img src={card.img} title={card.text} alt={card.text} /></div>

              </div>

            )
          })}
        </div>

  )
}

export default Body