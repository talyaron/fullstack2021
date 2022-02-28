axios
    .get('/getArticle').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    var search = ev.target.value;
    console.log(search);
    axios.get("/getArticle?search=" + search).then(function (_a) {
        var data = _a.data;
        var rootArticle = document.getElementById('rootArticle');
        var html = "";
        if (Array.isArray(data)) // this is like try catch to make sure it recieves the array
         {
            data.forEach(function (article) {
                html += "\n                <div class=\"articles\">\n                <h1 class=\"title\">" + article.title + "</h1>\n                <h3 class=\"articleContent\">" + article.content + "</h3>\n                </div>";
            });
            rootArticle.innerHTML = html;
        }
        else {
            console.log("the function doesnt recieve the array cause it isnt an array");
        }
    });
}
