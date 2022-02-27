axios.get("/tamir")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handlefind(ev) {
    var user = ev.target.value;
    axios.get("/tamir?user=" + user)
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.getElementById('root');
        var html = '';
        if (Array.isArray(data)) {
            data.forEach(function (data1) {
                html +=
                    "<div class='grid' style=\"display: grid;grid-template-rows: repeat(1fr)\">\n                    <h3 class='text'>" + data1.text + "</h3>\n                    <h3 class='text'>" + data1.text1 + "</h3>\n                   </div>\n                    ";
            });
            root.innerHTML = html;
        }
    });
}
