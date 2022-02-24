axios.get("/getPictures").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSlider(ev) {
    var year = ev.target.value;
    console.log(year);
    var rootSlide = document.querySelector('#rootSlide');
    rootSlide.innerHTML = "year: " + year;
    if (year) {
        axios.get("/getPictures?year=" + year).then(function (_a) {
            var data = _a.data;
            console.log(data);
            var root = document.querySelector("#root");
            var html = "";
            data.forEach(function (picture) {
                html += "<img src=\"" + picture.img + "\">";
            });
            root.innerHTML = html;
        });
    }
}
