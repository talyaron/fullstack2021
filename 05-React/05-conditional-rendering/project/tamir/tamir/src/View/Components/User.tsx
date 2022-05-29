import { useState } from "react"

const User = () => {
   
  const movies =[
  {name:'bla', img:'https://th.bing.com/th/id/OIP.i8mv_V-e7MmvoppX-pbKbwHaDt?pid=ImgDet&rs=1'},
  {name:'gererv', img:'https://th.bing.com/th/id/OIP.Hu7ck2WmfofqeSqLXDLnGwHaLF?pid=ImgDet&rs=1'},
  {name:'sgwr', img:'https://i.ytimg.com/vi/22rpOr8d2QQ/hqdefault.jpg'},
  {name:'dwv', img:'https://th.bing.com/th/id/OIP.a1lt8l8_jKmuh4NfxBC7kQHaFj?pid=ImgDet&rs=1'},
  {name:'wvvwr', img:'https://th.bing.com/th/id/R.4c26d4287938586501ba8f17ba64194a?rik=mNn8Z2tQeOpk6g&pid=ImgRaw&r=0'},
  {name:'svs', img:'https://th.bing.com/th/id/OIP.i8mv_V-e7MmvoppX-pbKbwHaDt?pid=ImgDet&rs=1'},

  ]

     return (
    <div className="movies">
      {movies.map((one,i)=>{
        return(
    <div className="movie">
      <img src={one.img}  />
      <h5 className="movie__name">{one.name}</h5>
    </div>
  )
})}
    </div>
  )
}


export default User