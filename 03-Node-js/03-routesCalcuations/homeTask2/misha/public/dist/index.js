function handleSearch(ev) {
    var searchTerm = ev.target.value;
    axios
        .get("get-article?terms=" + searchTerm)
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
        renderArticle(data);
    });
}
function renderArticle(article) {
    var root = document.querySelector(".article_root");
    article.forEach(function (paragraph) {
        var html = "";
        html += "\n        <div id='paragraph'>\n        <p>" + paragraph.content + "\n        </div>\n        ";
        root.innerHTML = html;
    });
}
