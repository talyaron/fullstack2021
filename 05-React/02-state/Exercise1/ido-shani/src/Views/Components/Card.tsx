import React from 'react'

interface cardProps{
    imgUrl:string;
    imgName:string
}

 const Card = (props:cardProps) => {
     const {imgUrl,imgName}=props
     
  return (
    <div className="card">
     
     <img src={imgUrl} alt=""/>
     <h2>{imgName}</h2>
     

    </div>
  )
}

export default Card


