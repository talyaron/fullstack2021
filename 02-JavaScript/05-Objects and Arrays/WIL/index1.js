const movies = [
    {Name:'The dark knight', Director:'Christopher Nolan', rating:9.0 , year:2008},
    {Name:'Gladiator' , Director:'Ridley Scott' , rating:8.5, year:2000},
    {Name:'Forrest Gump' , Director:'Robert Zemeckis', rating:8.7, year:1994},
    {Name:'The Matrix' , Director:'Lana Wachowski' , rating:8.6, year:1999},
    {Name:'Joker', Director:'Todd Phillips', rating:8.3, year:2019},
    {Name:'Memento', Director:'Christopher Nolan', rating:8.4, year:2000},
 
]

const moviesRank = movies.sort(function rank(a,b){
if (a.rating<b.rating){
    return 1
}
else{
    return -1
}
}
)
console.log(moviesRank)



// const yearRank = movies.sort(function sort(x,y)
// {if (x.year>y.year){
//     return 1
// }
// else{
//     return -1
// }
// }
// )
// console.log(yearRank)
