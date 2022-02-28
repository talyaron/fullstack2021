axios
.get('/getArticle').then(({data})=>{
    console.log(data)
});

function handleSearch(ev){
    const search=ev.target.value;
    console.log(search);
   
    
    axios.get(`/getArticle?search=${search}`).then(({data})=>{
     
        const rootArticle=document.getElementById('rootArticle');
        let html="";
        if(Array.isArray(data)) // this is like try catch to make sure it recieves the array
        {
            data.forEach((article)=>{
                html+=`
                <div class="articles">
                <h1 class="title">${article.title}</h1>
                <h3 class="articleContent">${article.content}</h3>
                </div>`
                })
                rootArticle.innerHTML=html;
        }else{
            console.log("the function doesnt recieve the array cause it isnt an array")
        }
     
        


    });
    
    
    
}