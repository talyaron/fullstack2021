axios
    .get("/me")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
axios
    .get("/friend")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
