"use strict";
exports.__esModule = true;
axios.get("/teams").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(event) {
    var search = event.target.value;
    console.log(search);
    axios.get("/teams?search=" + search).then(function (_a) {
        var data = _a.data;
        var root = document.querySelector("#root");
        var html = "";
        if (Array.isArray(data)) {
            data.forEach(function (footballer) {
                html += "<div class=\"players\">\n              <h2 class=\"player\">" + footballer.player + "</h2>\n              <h3 class=\"team\">" + footballer.team + "</h3>\n              <img src=\"" + footballer.url + "\" alt=\"\">\n              </div>";
            });
            root.innerHTML = html;
        }
        else {
            console.log("function dont get the array");
        }
    });
}
