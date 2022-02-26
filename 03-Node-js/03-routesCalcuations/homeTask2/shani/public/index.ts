
axios
.get('/getArticle').then(({data})=>{
    console.log(data)
});

function handleSearch(ev){
    const search=ev.target.value;
    console.log(search)
}