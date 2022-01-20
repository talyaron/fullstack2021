interface myHome{

books:Array<{
title:string
pages:number
}>

    clothes:Array<{
        shirts:number
        pants:number
        coats:number
    }>

    movies:Array<{
        name:string
        yearOfPublication:number
    }>
}

let myHome = {
    books:[
          {
        title:'The Thirty-Nine Steps',
        pages:138
        },
        {
            title:'The Prime of Miss Jean Brodie',
            pages:150
        },
        {
            title:'A Single Man',
            pages:152
        }
    ],
    clothes:[
        {
        shirts:15
        },
       {
            pants:12
        },
      {  coats:6
        }
    ],
    movies:[
      {
          name:'Demon Slayer',
      yearOfPublication:2020
      },
      {
          name:'Andrei Rublev',
    yearOfPublication:1966
    },
    {
        name:'Fanny och Alexander',
        yearOfPublication:1982
    }
    ]

    
}
console.log(myHome)

 