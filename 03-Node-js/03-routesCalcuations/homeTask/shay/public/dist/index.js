axios.get("/getUser").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handeleSelect(ev) {
    ev.preventDefault();
    try {
        var year = ev.target.value;
        console.log(year);
        if (year) {
            axios.get("/getUser?year=" + year).then(function (_a) {
                var data = _a.data;
                var root = document.getElementById("rootFilter");
                console.log(data);
                var html = "";
                if (Array.isArray(data)) {
                    data.forEach(function (user) {
                        html += "<div class=\"rootFilter__card\"><img src=\"" + user.photo + "\" style=\"width:70%; height:100%;\"></img>\n                        <div class=\"nameYear\">\n                        <p>" + user.name + "</p>\n                        <p>year: " + user.year + "</p></div></div>";
                    });
                    root.innerHTML = html;
                }
                else {
                    throw new Error("data is not an array try again");
                }
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}
function handleSelectType(ev) {
    ev.preventDefault();
    try {
        var root_1 = document.getElementById("rootFilter");
        var type = ev.target.value;
        console.log(type);
        if (type) {
            axios.get("/getUser?type=" + type).then(function (_a) {
                var data = _a.data;
                console.log(data);
                var html = "";
                if (Array.isArray(data)) {
                    data.forEach(function (user) {
                        html += "<div class=\"rootFilter__card\"><img src=\"" + user.photo + "\" style=\"width:70%; height:100%;\"></img>\n                        <div class=\"nameYear\">\n                        <p>" + user.name + "</p>\n                        <p>year: " + user.year + "</p></div></div>";
                    });
                    root_1.innerHTML = html;
                }
                else {
                    throw new Error("data is not an array try again");
                }
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}
