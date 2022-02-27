axios.get("/tamir")
    .then(function (_a) {
    var data = _a.data;
});
function handlefind(ev) {
    var user = ev.target.value;
    axios.get('/tamir')
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
    });
}
