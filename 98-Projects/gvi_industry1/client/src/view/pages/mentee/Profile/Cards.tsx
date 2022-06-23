import React from 'react'

type Props = {
    cards:Array<any>
}

function Cards({cards}: Props) {
  return (
    <div>
        {cards.map((card) => {
            return(
              <div>
                {card.fN}
              </div>  
            )
        })}
    </div>
  )
}

export default Cards