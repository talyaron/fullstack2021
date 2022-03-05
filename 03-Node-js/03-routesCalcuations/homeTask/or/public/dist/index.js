axios.get("get-pics").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleOrderSlider(ev) {
    var order = ev.target.value;
    console.log(order);
    axios.get("get-pics?order=" + order).then(function (_a) {
        var data = _a.data;
        console.log(data);
        var root = document.querySelector("#root");
        var html = "";
        if (Array.isArray(data)) {
            data.forEach(function (pic) {
                html += "<h1>" + pic.name + "</h1>\n            <img src=" + pic.picUrl + "></img>";
            });
            root.innerHTML = html;
        }
        else {
            console.log("it isnt an array");
        }
    });
}
