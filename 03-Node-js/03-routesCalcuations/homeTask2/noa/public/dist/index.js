axios.get("/get-google").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var search = ev.target.value;
    axios.get("/get-google?search=" + search).then(function (_a) {
        var data = _a.data;
        console.log(data);
    });
}
var root = document.querySelector("#root");
