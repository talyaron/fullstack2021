//*******************CLIENT*********************************************//
axios.get('/getusers')
.then(({data})=>{
    console.log(data)
})


function handleSelectYears(ev){
    try{
    const year=ev.target.value;
    //console.log(gender);
    if (year){//query to server to return only a certain gender
        axios.get(`/getusers?year=${year}`).then(({data})=>{
           // console.log(data);

        const root=document.querySelector('#root');
        let html='';
        if (Array.isArray(data)){//verify that the query to server returns an array
            data.forEach(user=>{
                //html+=`<p>${user.year}</p>`
                html+=`<div class="card"><img id="pic" src= "${user.photo}" ></img><p class="bottomHeader">${user.name}</P></div>`;
            })
            root.innerHTML=html;

        }else{
            throw new Error ('data is not an array')
        }

    });
}
}catch(err){
    console.error(err);
}
}

    function handleSelectCategory(ev){
        try{
        const category=ev.target.value;
        //console.log(gender);
        if (category){//query to server to return only a certain gender
            axios.get(`/getusers?category=${category}`).then(({data})=>{
               // console.log(data);
    
            const root=document.querySelector('#root');
            let html='';
            if (Array.isArray(data)){//verify that the query to server returns an array
                data.forEach(user=>{
                    //html+=`<p>${user.category}</p>`
                    html+=`<div class="card"><img id="pic" src="${user.photo}" ></img><p class="bottomHeader">${user.name}</P></div>`;
                })
                root.innerHTML=html;
    
            }else{
                throw new Error ('data is not an array')
            }
    
        });
    

    }
}catch(err){
    console.error(err);
}
}

