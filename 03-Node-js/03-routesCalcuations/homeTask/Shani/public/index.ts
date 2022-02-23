


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
                html+=`<p>${painting.view}</p>
                <img src=${painting.imgUrl}>`
            });
            root.innerHTML=html;
        }else{
            console.log("the function doesnt recieve the array cause it isnt an array")
        }


    });
}