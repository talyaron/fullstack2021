axios
    .get('./getUsers')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
