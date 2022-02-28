axios
    .get('/get-songs')
    .then(({ data }) => {
        console.log(data)
    })




function handleSearch(ev) {

    const searchTerm = ev.target.value;

    axios.get(`/get-songs?searchTerm=${searchTerm}`).then(({ data }) => {

        const root = document.querySelector("#SearchList");
        let html = "";

        if (searchTerm == 0) {
            root.innerHTML = html;
            return;
        }
        data.forEach(item => {
            html += `<div class="textContainer">
                <div class="title">${item.title}</div>
                <div class="text">${item.text}</div>
                </div>`
        });
        root.innerHTML = html;
    })
}
