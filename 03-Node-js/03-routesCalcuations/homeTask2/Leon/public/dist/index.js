axios.get("/teams").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(event) {
    var search = event.target.value;
    var regex = new RegExp(search, "i");
    var root = document.querySelector("#root");
}
