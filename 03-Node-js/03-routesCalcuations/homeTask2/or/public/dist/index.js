axios.get("get-articles").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var searchInput = ev.target.value;
    var root = document.querySelector("#root");
    axios.get("get-articles?searchInput=" + searchInput).then(function (_a) {
        var data = _a.data;
        var html = "";
        data.forEach(function (article) {
            html += "\n            <div class=\"rendered-articles\">\n            <h2 class =\"rendered-articles__title\">" + article.title + "</h2>\n            <p class =\"rendered-articles__content\">" + article.content + "</p>\n            </div>";
        });
        root.innerHTML = html;
    });
}
