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

    let html = "";

    article.forEach(paragraph => {
        
        html += `
        <div class='paragraph'>
        <p class="paragraph__title">${paragraph.content_title}</p>
        <p>${paragraph.content}</p>
        </div>
        `

    });


    root.innerHTML = html;
}
