axios.get("/tamir")
    .then(function (_a) {
    var data = _a.data;
});
function handlefind(ev) {
    var user = ev.target.value;
    axios.get("/tamir?user=" + user)
        .then(function (_a) {
        var data = _a.data;
        var root = document.getElementById('root');
        var html = '';
        if (Array.isArray(data)) {
            data.forEach(function (data1) {
                html += "<h1 class='title'>" + data1.title + "</h1>\n                    <h3> class='text'>" + data1.text + "</h3>\n                    ";
            });
            root.innerHTML = html;
        }
    });
}
