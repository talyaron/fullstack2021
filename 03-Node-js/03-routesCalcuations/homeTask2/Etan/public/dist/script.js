axios.get("/get-articles").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var searchArea = document.querySelector("search");
    var searchTerm = ev.target.value;
    var regEx = new RegExp(searchTerm, "i");
    var html = "";
    console.log(searchTerm.length);
    axios.get("/get-articles?searchTerm=" + searchTerm).then(function (_a) {
        var data = _a.data;
        var root = document.querySelector("articles");
        root.innerHTML = "";
        if (searchTerm.length > 0) {
            if (Array.isArray(data)) {
                console.log(data);
                var foundArticles = data.filter(function (article) {
                    if (article.title.match(regEx))
                        return true;
                });
                var html_1 = foundArticles.map(function (article) {
                    return "<div class=\"article\">\n          <dlink>" + article.link + "</dlink>\n            <h1>" + article.title + "</h1>\n            <p>" + article.text + "</p>\n            </div>";
                });
                searchArea.style.transform = "translate(-50%, -130%)";
                root.innerHTML = html_1;
            }
        }
        if (searchTerm.length === 0) {
            html = "";
            searchArea.style.transform = "translate(-50%,-50%)";
            root.innerHTML = html;
        }
    });
}
