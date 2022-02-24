function handleSelectPic(ev) {
    try {
        var pic = ev.target.value;
        console.log(pic);
        axios.get("/get-pictures?pic=" + pic).then(function (_a) {
            var data = _a.data;
            console.log(data);
            var root = document.querySelector(".root");
            render(root, data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function render(root, data) {
    var html = "";
    data.forEach(function (pic) {
        html += "<div class=\"card\">\n    <img src=\"" + pic.url + "\" alt=\"\">    \n    </div>";
    });
    root.innerHTML = html;
}
