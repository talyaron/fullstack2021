axios
    .get('/get-pictures')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
    var root = document.querySelector('#root');
    var html = '';
    data.forEach(function (pic) {
        html += "<div class=\"picture\">\n            <div><img src=\"" + pic.img + "\" alt=\"\"></div>\n            <div class=\"pictureText\">\n            <div style=\"color: brown;\">" + pic.category + "</div>\n            <div>" + pic.name + "</div>\n            <div style=\"color: brown;\">" + pic.year + "</div>\n            </div>\n            </div>\n            ";
    });
    root.innerHTML = html;
});
function handleSelect(ev) {
    var category = ev.target.value;
    axios
        .get("/get-pictures?category=" + category)
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.querySelector('#root');
        var html = '';
        data.forEach(function (pic) {
            html += "<div class=\"picture\">\n                <div><img src=\"" + pic.img + "\" alt=\"\"></div>\n                <div class=\"pictureText\">\n                <div style=\"color: brown;\">" + pic.category + "</div>\n                <div>" + pic.name + "</div>\n                <div style=\"color: brown;\">" + pic.year + "</div>\n                </div>\n                </div>\n                ";
        });
        root.innerHTML = html;
    });
}
function handleSlider(ev) {
    var year = ev.target.value;
    var rootYear = document.querySelector('#rootYear');
    rootYear.innerHTML = year;
    axios
        .get("/get-pictures?year=" + year)
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.querySelector('#root');
        var html = '';
        data.forEach(function (pic) {
            html += "<div class=\"picture\">\n            <div><img src=\"" + pic.img + "\" alt=\"\"></div>\n            <div style=\"color: brown;\">" + pic.category + "</div>\n            <div>" + pic.name + "</div>\n            <div style=\"color: brown;\">" + pic.year + "</div>\n            </div>\n            ";
        });
        root.innerHTML = html;
    });
}
