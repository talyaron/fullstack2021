axios.get("/get-google").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var search = ev.target.value;
    axios.get("/get-google?search=" + search).then(function (_a) {
        var data = _a.data;
        var root = document.querySelector("#root");
        var html = '';
        data.forEach(function (element) {
            html += "<div class=\"card\"> \n            <h2> " + element.title + "</h2>\n            <p> " + element.article + "</p>";
        });
        root.innerHTML = html;
    });
}
