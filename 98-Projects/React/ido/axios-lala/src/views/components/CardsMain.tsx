import React from 'react'

interface cardsMainProps{
    backgroundImage:any
}

function CardsMain (props:cardsMainProps) {
    
    const {backgroundImage} = props;

    
  return (
        <div className="App-main-card" style={{backgroundImage:`url(${backgroundImage}})`}} />
  )
}

export default CardsMain