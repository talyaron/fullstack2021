axios
    .get('/get-users').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var search = ev.target.value;
    console.log(search);
    axios.get("/get-users?search=" + search).then(function (_a) {
        var data = _a.data;
        var root = document.getElementById('root');
        root.style.border = '1px solid #ddd';
        root.style.borderRadius = ' 15px';
        var html = "";
        data.forEach(function (searchData) {
            html += "\n                <div class=\"searchData\">\n                <h1>" + searchData.title + "</h1>\n                </div>";
        });
        root.innerHTML = html;
    });
}
