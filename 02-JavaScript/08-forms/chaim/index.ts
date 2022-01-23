interface MyHome{
    movies:Array<Movie>;
    books:Array<Books>;
    clothes:Array<Clothes>;
    addMovie(movie:Movie);
    removeMovie(movieTitle:string);
    renderMovies(domElement:any);
}

interface Movie{
    title:string;
    year:number
}
interface Books{
    title:string;
    author:string;
    
}
interface Clothes{
    type:string;
    brand:string;
}

function handleAddbooks(ev){
    ev.preventDefault();
    console.dir(ev.target)
    const title= ev.target.elements.title.value
    const year= ev.target.elements.year.valueAsNumber;
    

}