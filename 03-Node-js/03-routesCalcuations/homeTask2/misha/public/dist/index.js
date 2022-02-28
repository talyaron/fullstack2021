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
    var html = "";
    article.forEach(function (paragraph) {
        html += "\n        <div class='paragraph'>\n        <p class=\"paragraph__title\">" + paragraph.content_title + "</p>\n        <p>" + paragraph.content + "</p>\n        </div>\n        ";
    });
    root.innerHTML = html;
}
