"use strict";
exports.__esModule = true;
axios.get("/getArticale").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSearch(ev) {
    try {
        var search = ev.target.value;
        var regex_1 = new RegExp(search, "i");
        var root_1 = document.getElementById("rootSearch");
        root_1.innerHTML = "";
        if (search.length > 0) {
            axios.get("/getArticale?search=" + search).then(function (_a) {
                var data = _a.data;
                var foundProducts = data.filter(function (product) {
                    if (regex_1.test(product.title))
                        return true;
                    else if (regex_1.test(product.articale))
                        return true;
                    else if (regex_1.test(product.year))
                        return true;
                    else {
                        return false;
                    }
                });
                var html = foundProducts
                    .map(function (product) {
                    return "<div class = \"rootSearch__articaleShow\">\n          <img src=\"" + product.photo + "\">\n          <h3>" + product.title + "</h3>\n          <h6>" + product.articale + "<h6>\n          <p>" + product.year + "</p></div>";
                })
                    .join("");
                root_1.innerHTML = html;
                console.log(foundProducts);
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}
function handeleSelect(ev) {
    ev.preventDefault();
    try {
        var year_1 = ev.target.value;
        console.log(year_1);
        if (year_1) {
            axios.get("/getArticale?year=" + year_1).then(function (_a) {
                var data = _a.data;
                var filterUsers = data.filter(function (user) { return user.year === year_1; });
                var rootSlider = document.getElementById('rootSlider');
                rootSlider.innerHTML = "<p style=\"font-size: 12px;\"> article from the year " + year_1 + "</p>";
                var root = document.getElementById("rootSearch");
                console.log(filterUsers);
                var html = "";
                if (Array.isArray(filterUsers)) {
                    filterUsers.forEach(function (user) {
                        html += "<div class = \"rootSearch__articaleShow\">\n              <img src=\"" + user.photo + "\">\n              <h3>" + user.title + "</h3>\n          <h6>" + user.articale + "<h6>\n          <p>" + user.year + "</p></div>";
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
        var root_2 = document.getElementById("rootSearch");
        var type_1 = ev.target.value;
        console.log(type_1);
        if (type_1) {
            axios.get("/getArticale?type=" + type_1).then(function (_a) {
                var data = _a.data;
                var filters = data.filter(function (user) { return user.type === type_1; });
                console.log(filters);
                var html = "";
                if (Array.isArray(filters)) {
                    filters.forEach(function (user) {
                        html += "<div class = \"rootSearch__articaleShow\">\n              <img src=\"" + user.photo + "\">\n              <h3>" + user.title + "</h3>\n          <h6>" + user.articale + "<h6>\n          <p>" + user.year + "</p></div>";
                    });
                    root_2.innerHTML = html;
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
