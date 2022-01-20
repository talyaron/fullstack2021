interface MyHome{
    movies:Array<Movie>;
    books:Array<Books>;
    clothes:Array<Clothes>;
    addMovie(movie:Movie);
    addBook(book:Books);
    
    removeMovie(movieTitle:string);
    removeBook(bookTitle:string);
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

const shaniHome:MyHome={
    movies:[{title:"shani",year:1999}],
    books:[{title:"Apple",author:"shani"}],
    clothes:[{type:"Shoe",brand:"store"}],
    addMovie(movie:Movie){
        this.movies.push(movie);
    },
    addBook(book:Books){
        this.books.push(book);
    },
    removeMovie(movieTitle:string){
       
       const index =  this.movies.findIndex(movie=>movie.title === movieTitle);
       if(index>= 0){
           this.movies.splice(index,1)
       }
    },
    renderMovies(domElement){
        let html='';
        this.movies.forEach(movie=>{
            html+=`<div class='card'>
            <p>${movie.title}, ${movie.year}</p></div>`
        })

        domElement.innerHTML = html
    }

    
}
function handleAddMovie(ev){
    ev.preventDefault();
    console.dir(ev.target)
    const title = ev.target.elements.title.value;
    const year:number = ev.target.elements.year.valueAsNumber;

    shaniHome.addMovie({title, year});
    const rootMovies = document.getElementById('rootMovies');
    shaniHome.renderMovies(rootMovies);

    ev.target.reset();
}

shaniHome.addMovie({title:'matrix', year:1999});
shaniHome.addBook({title:"meeee",author:"shani"})
shaniHome.removeMovie('matrix-2');

const rootMovies = document.getElementById('rootMovies');
shaniHome.renderMovies(rootMovies);

console.log(shaniHome);