axios
    .get('/getPics').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handlePhotoView(ev) {
    var view = ev.target.value;
    // console.log(view);
    axios.get("/getPics?view=" + view).then(function (_a) {
        var data = _a.data;
        var root = document.getElementById("root");
        var html = "";
        if (Array.isArray(data)) // this is like try catch to make sure it recieves the array
         {
            data.forEach(function (painting) {
                html += "<h1>" + painting.view + "</h1>\n                <h2>" + painting.name + "</h2>\n                <img src=" + painting.imgUrl + ">";
            });
            root.innerHTML = html;
        }
        else {
            console.log("the function doesnt recieve the array cause it isnt an array");
        }
    });
}
