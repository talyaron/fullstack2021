


axios
.get('/getPics').then(({data})=>{
    console.log(data)
});

function handlePhotoView(ev){
    const view=ev.target.value;
    // console.log(view);

    axios.get(`/getPics?view=${view}`).then(({data})=>{

        const root=document.getElementById("root")
        let html="";
        if(Array.isArray(data)) // this is like try catch to make sure it recieves the array
        {
            data.forEach((painting)=>{
                html+=`<h1>${painting.view}</h1>
                <h2>${painting.name}</h2>
                <img src=${painting.imgUrl}>`
            });
            root.innerHTML=html;
        }else{
            console.log("the function doesnt recieve the array cause it isnt an array")
        }


    });
}



function handlePicsByYear(ev){
    const year=ev.target.value;
    console.log(year);

    //this is so the year is shown by the value chosen
    let rootYear=document.getElementById('rootYear');
    rootYear.innerHTML=year;
    

    axios.get(`/getPics?year=${year}`).then(({data})=>{

        const root=document.getElementById("root")
        let html="";
        if(Array.isArray(data)) 
        {
            data.forEach((painting)=>{
                html+=`
                <h2>${painting.name}</h2>
                <img src=${painting.imgUrl}>`
            });
            root.innerHTML=html;
        }else{
            console.log("the function doesnt recieve the array cause it isnt an array")
        }

    });

}