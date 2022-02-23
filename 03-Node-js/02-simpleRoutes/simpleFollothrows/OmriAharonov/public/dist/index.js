axios
    .get("/getMe")
    .then(function (_a) {
    var data = _a.data;
    //console.log('my name is ', data[0].name , ' and i am ', data[0].age , ' years old');
    console.log(data);
})["catch"](function (err) {
    console.error(err);
});
