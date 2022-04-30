import MemeCards from'./MemeCards';

import React from 'react'

//this holds the array and contains the meme card that will show how each meme will be displayed

interface MemesProps{
    imgUrl:string;
    topic:string;
    rating:number
}

const memes:Array<MemesProps>=[
    {imgUrl:'https://pbs.twimg.com/media/EdTuCuOXkAg68kY.png',topic:'NPM',rating:8},
    {imgUrl:'https://pics.me.me/mirror-mirror-who-is-the-best-full-stack-web-developer-61254074.png',topic:'HTTP Status Codes',rating:4},
    {imgUrl:'https://img.devrant.com/devrant/rant/r_3015646_HZCi4.jpg',topic:'Typescript',rating:6},
    {imgUrl:'https://64.media.tumblr.com/dfea96ca9f57b5f61b4a1ef054003d2f/162976fa2e3368dc-32/s1280x1920/152601befcd73d5d4a1137da5c3722d512887021.jpg',topic:'Programming',rating:3},
    {imgUrl:'https://ahseeit.com//king-include/uploads/2021/01/128863214_759309254669350_1281019078905082758_n-4439807969.jpg',topic:'Fullstack Developer',rating:3},
    {imgUrl:'https://preview.redd.it/bptzx7ur4uj11.jpg?auto=webp&s=e6660e4545b2463db71c4acb481624730914f8e1',topic:'CSS',rating:5}
]



const Container = () => {
  return (
    <div className='container'>

        {memes.map((meme,i)=>{
           return <MemeCards key={i} imgUrl={meme.imgUrl} topic={meme.topic} rating={meme.rating}/>
        })}
    </div>

  )
}

export default Container