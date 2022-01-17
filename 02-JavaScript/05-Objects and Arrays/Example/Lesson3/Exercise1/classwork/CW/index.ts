interface Moives {
    movies: Array<Movie>;
    increasePrices(number): any
}
interface Movie {
    title: string;
    avarageScore: number;
    price: number

}

let moviesList: Moives = {
    movies: [{
        title: "Looper",
        avarageScore: 7.5,
        price: 10
    },
    {
        title: "Fight Club",
        avarageScore: 8.8,
        price: 30
    },
    {
        title: "The GodFather",
        avarageScore: 9.2,
        price: 20
    }
    ],
    increasePrices(precentage) {
        this.movies.forEach(movie => {
            movie.price += (movie.price * precentage) / 100;
        })
        return this;
    }
}




function renderMovie(movieOBj: Moives, domElement: any) {
    let HTML: string = '';

    movieOBj.movies.forEach(movie => {
        let MovieHTML = `<div class='card'><h2>${movie.title}</h2>
           <p>The avarage score:${movie.avarageScore}</p>
           <p>The price:${movie.price}$</p></div>`
           HTML+=MovieHTML;

    })

    domElement.innerHTML=HTML;

}   
const root= document.querySelector('#RootMovies')

renderMovie(moviesList, root);

function HandleForm(ev){
    ev.preventDefault();
    
    let x= (<HTMLInputElement>document.querySelector('#precentage')).value;
   
    
    console.log(moviesList.increasePrices(x));
    renderMovie(moviesList, root);
}

