axios
    .get("/getPics")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
