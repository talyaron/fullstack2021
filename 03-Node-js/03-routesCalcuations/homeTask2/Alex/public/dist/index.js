function handleSearch(event) {
    axios.get("/getText?searchTerm=" + event.target.value).then(function (_a) {
        var data = _a.data;
        print(data);
    });
}
function print(list) {
    var dom = document.querySelector('#root');
    var html = "";
    list.forEach(function (text) {
        html += "<p>" + text.title + "<br>" + text.body + "<p>";
    });
    dom.innerHTML = html;
}
;
