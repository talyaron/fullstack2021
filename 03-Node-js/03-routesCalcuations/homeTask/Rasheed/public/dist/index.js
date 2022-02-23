axios.get("/getUsers")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSlide(ev) {
    var slider = document.getElementById("myRange");
    var year = ev.target.value;
    axios.get("/getUsers?year=" + year).then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.getElementById("root");
        var html = '';
        data.forEach(function (data) {
            html += "<div class='dataContainer'>\n        <h1 class='dataContainer__h1'>" + data.title + "</h1>\n        <img class='dataContainer__img' src=\"" + data.img + "\">\n        <h2 class='dataContainer__h2'>" + data.year + "</h2>\n        </div>";
        });
        root.innerHTML = html;
    });
}
