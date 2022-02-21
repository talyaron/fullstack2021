var id = 0;
axios
    .get("/getMe")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
    id = data[0].id;
    console.log(id);
})["catch"](function (err) {
    console.error(err);
});
axios
    .get("/getFriends")
    .then(function (_a) {
    var data = _a.data;
    console.log({ data: data });
    id = data[0].id;
    console.log(id);
})["catch"](function (err) {
    console.error(err);
});
