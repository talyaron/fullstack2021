axios.get("/get-google").then(({ data }) => {
    console.log(data)
})


function handleSearch(ev) {
    const search = ev.target.value;

    axios.get(`/get-google?search=${search}`).then(({ data }) => {
     
        const root = document.querySelector("#root")

        let html = '';

        data.forEach(element => {
            html += `<div class="card"> 
            <h2> ${element.title}</h2>
            <p> ${element.article}</p>`
        });
        root.innerHTML = html

    })
}


