axios
    .get('/getMe')
    .then(function (_a) {
    var data = _a.data;
    return console.log(data[0].name + " is " + data[0].age + " years old");
});
axios
    .get('/getFriend')
    .then(function (_a) {
    var data = _a.data;
    return console.log(data.name + " is " + data.age + " years old");
});
