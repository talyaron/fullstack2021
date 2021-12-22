const movies = [
    { title: 'Spider-Man: No Way Home', director: 'Jon Watts', rating: '9.0', year: '2021' },
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', rating: '9.3', year: '1994' },
    { title: 'The Godfather', director: 'Francis Ford Coppola', rating: '9.2', year: '1972' },
    { title: 'The Dark Knight', director: 'Christopher Nolan', rating: '9.0', year: '2008' },
    { title: '12 Angry Men', director: 'Sidney Lumet', rating: '9.0', year: '1957' },
    { title: 'Schindlers List', director: 'Steven Spielberg', rating: '8.9', year: '1993' },
];

// sort by rating
movies.sort((a, b) => {
    return (b.rating - a.rating)
})
console.log(`The movies by their IMBD ratings:`)
movies.forEach((movie) => {
    console.log(`${movie.title} (${movie.rating})`)
})

// sort by year
movies.sort((a, b) => {
    return (a.year - b.year)
})
console.log(`The movies by their year:`)

movies.forEach((movie) => {
    console.log(`${movie.title} (${movie.year})`)
})

// new rating
// let newRanking = '9.5'
// let title = movies[5].title

// console.log(`The new rating of the movie you chose:${title} (${newRanking})`)

function changeRanking(title, newRanking='10') {
    // newRanking = '10'
    title = movies[5].title
    console.log (title + newRanking)
}
changeRanking ()

