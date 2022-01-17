interface Movies{
    movies:Array<Movie>;
    increasePrices:any
}

interface Movie{
    title:string; 
    imgSrc:string;
    avarageScore:number;
    price:number;
}

//create an object with 3 movies
//create an internal function which increase price by X% for all movies