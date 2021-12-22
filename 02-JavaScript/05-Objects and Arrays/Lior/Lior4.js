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
        const rating= movies.sort(movies.rating);
    }
)


//q3

movies.forEach(movie =>
    {
        const YearOfPuclication= movies.sort(movies.year);
    }
)


//q4

 function changeRanking(title, newRanking)
{
    for (i=0; i<movies.length; i++)
    {
        if(movies[i].name=title)
        {
            movies[i].rating=newRanking
        }  
    }

    return movies
}
