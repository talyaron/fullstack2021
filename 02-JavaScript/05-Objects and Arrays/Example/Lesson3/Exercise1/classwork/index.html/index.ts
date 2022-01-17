interface Movies{
    movies:Array<Movie>;
    increasePrices(number):any
}

interface Movie{
    title:string; 
    imgSrc:string;
    avarageScore:number;
    price:number;
}
 
const listOfMovies:Movies= {
    movies:[
        {
           title:'jhjhj',
           imgSrc:'ngjn',
           avarageScore:15,
           price: 18,
        },
        {
            title:'jhjhj',
            imgSrc:'ngjn',
            avarageScore:15,
            price: 18,
         },
         {
            title:'jhjhj',
            imgSrc:'ngjn',
            avarageScore:15,
            price: 18,
         }
    ],
    increasePrices(percent){
        for(let i in this.movies)
        {
            this.movies[i].price*=(percent/100)+1
            console.log(this.movies[i].price)
        }
    }
    
}
listOfMovies.increasePrices(5)
console.log(listOfMovies)

