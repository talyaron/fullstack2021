axios.get("/getUsers")
    .then(({ data }) => {
        console.log(data)
    })

function handleSlide(ev) {

    const slider: any = document.getElementById("myRange");
    
    const year = ev.target.value
    axios.get(`/getUsers?year=${year}`).then(({ data }) => {
        console.log(data);


        const root: any = document.getElementById("root")

        let html = '';
        data.forEach(data => {
            html += `<div class='dataContainer'>
        <h1 class='dataContainer__h1'>${data.title}</h1>
        <img class='dataContainer__img' src="${data.img}">
        <h2 class='dataContainer__h2'>${data.year}</h2>
        </div>`
        });
        root.innerHTML = html;

    });
}