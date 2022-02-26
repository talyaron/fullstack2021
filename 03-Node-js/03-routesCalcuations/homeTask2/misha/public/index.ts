function handleSearch(ev) {
    let searchTerm = ev.target.value;

    axios
        .get(`get-article?terms=${searchTerm}`)
        .then(({ data }) => {
        console.log(data);
        renderArticle(data);
    })

}

function renderArticle(article) {

    const root = document.querySelector(".article_root");

    article.forEach(paragraph => {

        let html = "";

        
        html += `
        <div id='paragraph'>
        </div>
        `

        root.innerHTML = html;
    });
}
