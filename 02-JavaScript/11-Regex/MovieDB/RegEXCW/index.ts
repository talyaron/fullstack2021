const moviesList = ['spider man', 'batman', 'forest gamp', 'justice league'];
function handleSearchMovie(ev){
    const searchedMovie = ev.target.value
    const root = document.querySelector('#root')
    const regex:RegExp = new RegExp(searchedMovie,'i');
    moviesList.forEach(movie=>{
        if(regex.test(movie)){
            root.innerHTML= `${movie}`
        }else{
            root.innerHTML=`${searchedMovie} does not exist`
        }
    })
}