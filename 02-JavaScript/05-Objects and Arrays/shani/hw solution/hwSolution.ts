interface myHome{
    movies: Array<Movie>;
    books: Array<Books>;
    expiredStuff: Array<Expired>;
    addMovie(movie: Movie);
    addBooks(book: Books);
    addExpired(expired: Expired);
    removeMovie(movieTitle: string);
    removeBooks(bookTitle: string);
    removeExpired(expiredName: string);
    renderMovies(domElement: any);

}

interface Movie{
    title:string;
    year:number;
    imgSrc?:string
}

interface Books{
    title:string;
    author:string;
    imgSrc:string
}

interface Expired{
   name:string;
    year:number;
    description:string
}

 const shaniHome:myHome={
     movies:[ { title: "Shark Tale", imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_.jpg", year: 2004 },
     { title: "Some Like It Hot", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Some_Like_It_Hot_%281959_poster%29.png", year: 1959 },],
     books:[ { title: "The Girl with the Dragon Tattoo", imgSrc: "https://m.media-amazon.com/images/I/51L+3fbhYML.jpg", author:"Stieg Larsson" },
     { title: "The Land of Stories: A Grimm Warning", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91Q5WZ7+TlL.jpg", author:"Chric Colfer" },],
     expiredStuff:[ { name: "Neosporin", description: "It still seems to work", year: 2018 },
     { name: "Bagel", description: "No one wants to be the asshole that takes the last bagel", year: 2017 },],
    addMovie(movie: Movie){
        this.movies.push(movie);
    },
    addBooks(book: Books){
        this.books.push(book);
    },
    addExpired(expired: Expired){
        this.expiredStuff.push(expired);
    },
    removeMovie(movieTitle: string){
        const index=this.movies.findIndex(movie => movie.title=== movieTitle);
        if(index>=0){
            this.movies.splice(index,1)

        }
    },
    removeBooks(bookTitle: string){
        const index=this.books.findIndex(book=> book.title=== bookTitle);
        if(index>=0){
            this.books.splice(index,1)

        }
    },
    removeExpired(expiredName: string){
        const index=this.expiredStuff.findIndex(expired => expired.name=== expiredName);
        if(index>=0){
            this.expiredStuff.splice(index,1)

        }
    },
    renderMovies(domElement){
        let html='';
        this.movies.forEach(movie => {
            html += `<div class='card'>
            <p>${movie.title}, ${movie.year}</p> <img src=${movie.imgSrc}></div>`
            
        })
        domElement.innerHTML = html
    },

}

function handleAddMovie(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const title = ev.target.elements.title.value;
    const year: number = ev.target.elements.year.valueAsNumber;
    const imgSrc:string = ev.target.elements.imgSrc.value;  
    

    shaniHome.addMovie({ title, year,imgSrc});
    const rootM = document.getElementById('rootMovies');
    shaniHome.renderMovies(rootM);

    ev.target.reset();
}


console.dir(shaniHome.movies)


shaniHome.addMovie({title:"Madagascar", imgSrc:"https://upload.wikimedia.org/wikipedia/en/7/7f/Madagascar2poster.jpg",year:2005});
shaniHome.addBooks({title:"Harry Potter", imgSrc:"",author:"JK Rowling"});
shaniHome.addExpired({name:"apple",description:"for pie maybe ",year:2021});
//shaniHome.removeMovie("Madagascar");
shaniHome.removeBooks("Harry Potter");
shaniHome.removeExpired("apple");

const rootM = document.getElementById('rootMovies');
shaniHome.renderMovies(rootM);


console.log(shaniHome)