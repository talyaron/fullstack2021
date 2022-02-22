axios.get('/work')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleselect(ev) {
    var year = ev.target.valu;
    var img = ev.target.value;
    var view = ev.target.value;
    console.log(view);
    if (view) {
        try {
            axios.get("/work?view=" + view + "&&?img=" + img)
                .then(function (_a) {
                var data = _a.data;
                console.log(data);
                var root = document.getElementById('root');
                var html = '';
                if (Array.isArray(data)) {
                    data.forEach(function (work) {
                        html += "<p>" + work.img + "</P>";
                    });
                    root.innerHTML = html;
                }
            });
        }
        catch (err) {
            throw new Error("eroor");
        }
    }
}
