axios.get('/work')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleselect(ev) {
    var view = ev.target.value;
    console.log(view);
    if (view) {
        axios.get("/work?view=" + view)
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var root = document.getElementById('root');
            var html = '';
            if (Array.isArray(data)) {
                data.forEach(function (work) {
                    html += "\n                            <p><img src=\"" + work.img + "\" alt=\"\" class='img'></P>";
                });
                root.innerHTML = html;
            }
        });
    }
}
function handlechenge(ev) {
    var year = ev;
    console.dir(ev);
    console.log(year);
    if (year) {
        axios.get("/work?year=" + year)
            .then(function (_a) {
            var data = _a.data;
            console.log();
            var root2 = document.getElementById('root2');
            var html = '';
            if (Array.isArray(data)) {
                data.forEach(function (work) {
                    html + ("\n                            <p><img src=\"" + work.img + "\" alt=\"\" class='img'></P>");
                });
                root2.innerHTML = html;
            }
        });
    }
}
