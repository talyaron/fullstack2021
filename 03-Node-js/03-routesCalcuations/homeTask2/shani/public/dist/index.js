axios
    .get('/getArticle').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var search = ev.target.value;
    console.log(search);
}
