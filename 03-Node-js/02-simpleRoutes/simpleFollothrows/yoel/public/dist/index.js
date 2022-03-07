axios
    .get('/getMe')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
axios
    .get('/getMyFriend')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
