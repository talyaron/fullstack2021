axios
    .get('/get-songs')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var searchTerm = ev.target.value;
    axios.get("/get-songs?searchTerm=" + searchTerm).then(function (_a) {
        var data = _a.data;
        var root = document.querySelector("#SearchList");
        var html = "";
        if (searchTerm == 0) {
            root.innerHTML = html;
            return;
        }
        data.forEach(function (item) {
            html += "<div class=\"textContainer\">\n                <div class=\"title\">" + item.title + "</div>\n                <div class=\"text\">" + item.text + "</div>\n                </div>";
        });
        root.innerHTML = html;
    });
}
