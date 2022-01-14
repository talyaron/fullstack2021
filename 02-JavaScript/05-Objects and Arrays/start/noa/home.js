
const movies = [
    { title: 'Hasandak', director: 'Francis Ford Coppola', rating: 9.2, year: 1972 },
    { title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', rating: 8.7, year: 1999 },
    { title: 'Drishyam 2', director: 'Jeethu Joseph', rating: 8.6, year: 2021 },
    { title: 'The Dark Knight', director: 'Christopher Nolan', rating: 9, year: 2008 },
    { title: 'HaPsantran', director: 'Roman Polanski', rating: 8.5, year: 2002 },
    { title: 'The Third Man', director: 'Carol Reed', rating: 8.1, year: 1949 }
]

const ranking = movies.sort(
    (a, b) => (a.rating < b.rating ? 1 : -1)
);
console.log(ranking)

const years = movies.sort(
    (a, b) => b.year - a.year);
console.log(years)



function changeRanking(title, newRanking) {
    return title + newRanking
}

console.log(changeRanking(movies[1].title ,' new ranking 7.3'))

