//call the server and get inforamtion
console.log("before....");
var id = 0;
axios
    .get("/getUsers")
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
    id = data[0].id;
    console.log(id);
})["catch"](function (err) {
    console.error(err);
});
console.log("after...");
console.log(id);
