
axios.get("/teams").then(({data})=>{console.log(data)})

function handleSearch(event){
   
    const search=event.target.value
    const regex:RegExp=new RegExp(search,`i`)
    const root=document.querySelector(`#root`)
}