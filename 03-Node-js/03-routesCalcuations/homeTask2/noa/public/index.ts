axios.get("/get-google").then(({ data }) => {
    console.log(data)
})


function handleSearch(ev) {
    const search = ev.target.value;
   
    axios.get(`/get-google?search=${search}`).then(({ data }) => {
        console.log(data)

    })

} 


const root=document.querySelector("#root")