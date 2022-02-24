axios
    .get("/getMe")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
axios
    .get("/getFriends")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
