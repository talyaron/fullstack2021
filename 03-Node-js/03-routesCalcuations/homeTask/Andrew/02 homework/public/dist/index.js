function handleSearch(ev) {
    var time1 = performance.now();
    axios
        .get("/getList?searchTerm=" + ev.target.value)
        .then(function (_a) {
        var data = _a.data;
        var exeTime = performance.now() - time1;
        render(data, exeTime);
    });
}
function render(List, time) {
    var html = "<p class=\"resualts\">About " + List.length + " results (" + time + " milliseconds)</p>";
    List.forEach(function (article) {
        html += "<div class=\"main__resualt\">\n                    <p class=\"main__resualt__URL\">" + article.URL + "</p>\n                    <a class=\"main__resualt__title\" href=\"" + article.URL + "\">" + article.title + "</a>\n                    <p class=\"main__resualt__text\">" + article.text + "</p>\n                </div>";
    });
    document.querySelector(".main").innerHTML = html;
}
