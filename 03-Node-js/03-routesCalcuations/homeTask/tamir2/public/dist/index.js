axios.get("/tamir")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handlefind(ev) {
    axios.get("/tamir")
        .then(function (_a) {
        var data = _a.data;
        var user = ev.target.value;
        var rexEa = new RegExp(user, 'i');
        if (rexEa.test(data)) {
            document.getElementById('root').innerHTML = "yes " + user;
        }
        else {
            document.getElementById('root').innerHTML = "no " + user;
        }
    });
}
console.log('hay');
