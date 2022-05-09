import React from 'react'
interface cardProps{
    imgUrl:string;
    imgTitle:string;
}

const Card=(props:cardProps)=>{
    const{imgUrl,imgTitle}=props

    return(
        <div className="image_card">
            <img src={imgUrl} alt="card image"/>
            <h3>{imgTitle}</h3>

        </div>
    )
}

export default Card