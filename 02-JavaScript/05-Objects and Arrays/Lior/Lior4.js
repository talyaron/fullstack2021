//Q1
const movies=[{name: 'Spider-Man: No Way Home', director: 'Jon Watts', rating:9.0, year:2021}
,{name: 'Harry Potter and the Goblet of Fire', director: 'Mike Newell', rating:7.7, year:2005}
,{name: 'Harry Potter and the Deathly Hallows: Part 2', director: 'David Yates', rating:8.1, year:2011}
,{name: 'Doctor Strange', director: 'Scott Derrickson', rating:7.5, year:2016}
,{name: 'Star Wars: Episode III - Revenge of the Sith', director: 'George Lucas', rating:7.5, year:2005}
,{name: 'Iron Man', director: 'Jon Favreau', rating:7.9, year:2008}]

//q2

movies.forEach(movie =>
    {
        const rating= movies.sort((a,b) => b.rating>a.rating );
        console.log(rating)
    }
)


//q3

movies.forEach(movie =>
    {
        const YearOfPuclication= moviessort((x,y) => y.year>x.year);
        console.log(YearOfPuclication)
    }
)


//q4

 function changeRanking(array,title, newRanking)
{
    if(typeof(title)==='string' && typeof(newRanking)==='number' && Array.isArray(array))
    {
        let index= movies.findIndex(movie => movie.title === title)
                movies[index].rating=newRanking;
                return movies;
    }
    else
    console.log("Your initial parameters are not in right format")
}
