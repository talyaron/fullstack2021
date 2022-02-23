// function handleSlider(ev) {
//     axios.get(`/get-photos?year=${gender}&stam=123`).then(({ data }) => {
//     }
// }
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
};
slider.addEventListener("mousemove", function () {
    var year = slider.value;
    var perc = (year - 1990) * 4;
    axios.get("/get-photos").then(function (_a) {
        var data = _a.data;
        var root = document.querySelector("#root");
        var filteredYear = data.filter(function (photo) { return photo.year === year; });
        var html = "<img src='" + filteredYear[0].url + "'></img>";
        root.innerHTML = html;
    });
    console.log(perc);
    var color = "linear-gradient(90deg, rgb(117,252,117)" + perc + "%, rgb(214,214,214)," + perc + "%)";
    slider.style.background = color;
});
