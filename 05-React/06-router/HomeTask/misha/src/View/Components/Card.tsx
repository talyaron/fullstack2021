
import React from 'react'

interface CardProps {
    dress: any;
}


const Card = (props: CardProps) => {

    const { dress } = props;

    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={dress.url} alt={dress.name}></img>
            </div>
            <h3 className='dressTitle'>{dress.name}</h3>
            <h3 className='dressPrice'>{dress.price}$</h3>
        </div>
    )
}

export default Card