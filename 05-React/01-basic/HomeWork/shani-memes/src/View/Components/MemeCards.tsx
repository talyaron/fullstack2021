import React from 'react'

interface MemesProp{
    imgUrl:string;
    topic:string;
    rating:number
}
 const MemeCards = (props:MemesProp) => {
     const {imgUrl,topic,rating}=props
  return (
    <div className='memeCard'>
        <h2 className='topic'>{topic}</h2>
        <img src={imgUrl} alt="fullstack joke"/>
        
        <h3 className='rating'>{rating}/10</h3>

    </div>
  );
};

export default MemeCards
