
axios.get("get-articles").then(({ data }) => {
    console.log(data)
});

function handleSearch(ev) {
    const searchInput = ev.target.value;

    const root = document.querySelector(`#root`)
    axios.get(`get-articles?searchInput=${searchInput}`).then(({ data }) => {
        let html = "";
        data.forEach((article) => {
            html += `
            <div class="rendered-articles">
            <h2 class ="rendered-articles__title">${article.title}</h2>
            <p class ="rendered-articles__content">${article.content}</p>
            </div>`
        })
        root.innerHTML = html;

    }
}