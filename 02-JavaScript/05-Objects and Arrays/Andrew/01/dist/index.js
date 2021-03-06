var myStuff = {
    books: [
        {
            name: "Norwegian Wood",
            description: "Haruki Murakami",
            imgSRC: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630460042l/11297._SY475_.jpg"
        },
        {
            name: "Atlas Shrugged",
            description: "Ayn Rand",
            imgSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Atlas_Shrugged_%281957_1st_ed%29_-_Ayn_Rand.jpg/220px-Atlas_Shrugged_%281957_1st_ed%29_-_Ayn_Rand.jpg"
        },
        {
            name: "The Hitchhiker's Guide to the Galaxy",
            description: "Douglas Adams",
            imgSRC: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg"
        },
        {
            name: "The Road",
            description: "Cormac McCarthy",
            imgSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/The-road.jpg/220px-The-road.jpg"
        },
        {
            name: "Gangsta Rap Coloring Book",
            description: "Aye Jay",
            imgSRC: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348445012l/231058.jpg"
        },
        {
            name: "The Anarchist Cookbook",
            description: "William Powell",
            imgSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/The_Anarchist_Cookbook_front_cover.jpg/220px-The_Anarchist_Cookbook_front_cover.jpg"
        },
    ],
    bikes: [
        {
            name: "Jeffsy",
            description: "YT industries",
            imgSRC: "https://www.expocafeperu.com/w/2020/07/yt-jeffsy-pinkbike-29-review-2020-forum-2019-27-industries-cf-pro-race-im-test-liebe-des-lebens-mtb.jpg"
        },
        {
            name: "Big Al",
            description: "ragley",
            imgSRC: "https://hub.chainreactioncycles.com/wp-content/uploads/2021/01/Big-Al-2_0-3-scaled.jpg"
        },
        {
            name: "Lux",
            description: "Canyon",
            imgSRC: "https://s14761.pcdn.co/wp-content/uploads/2016/03/Canyon-Lux-CF-9.9-Race-CB-web-5.jpg"
        },
        {
            name: "BigNine",
            description: "Merida",
            imgSRC: "https://www.mbike.gr/wp-content/uploads/2016/12/meridamtb-2519.jpg"
        },
    ],
    movies: [
        {
            name: "Giv'at Halfon Eina Ona",
            description: "1976",
            imgSRC: "https://m.media-amazon.com/images/M/MV5BYWExNjMwN2ItYzEyYi00ZjRjLWJhNWQtMTU2MzExYTQyYTA2XkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_.jpg"
        },
        {
            name: "The Good, the Bad and the Ugly",
            description: "1966",
            imgSRC: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d697981907e68d360be0bef8d1a1b9cc2136e7e087d6992273a7a3c0b9c2ef93._RI_V_TTW_.jpg"
        },
        {
            name: "L??on: The Professional",
            description: "1994",
            imgSRC: "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg"
        },
        {
            name: "Some Like It Hot",
            description: "1959",
            imgSRC: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Some_Like_It_Hot_%281959_poster%29.png/220px-Some_Like_It_Hot_%281959_poster%29.png"
        },
        {
            name: "Back to the Future",
            description: "1985",
            imgSRC: "https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
    ],
    addItem: function (nameOf, secInfo, pic, category) {
        this[category].push({ name: nameOf, description: secInfo, imgSRC: pic });
    },
    removeItem: function (nameOf) {
        for (var category in this) {
            for (var object in this[category]) {
                if (this[category][object].name == nameOf) {
                    this[category].splice(object, 1);
                    return;
                }
            }
        }
        alert("no item with the name \"" + nameOf + "\" exists");
    },
    arrangeByYearUp: function () { this.movies.sort(function (a, b) { return a.description - b.description; }); },
    arrangeByYearDown: function () { this.movies.sort(function (a, b) { return b.description - a.description; }); },
    arrangeByNameUp: function () {
        this.movies.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase())
                return -1;
            if (a.name.toUpperCase() > b.name.toUpperCase())
                return 1;
            return 0;
        });
    },
    arrangeByNameDown: function () {
        this.movies.sort(function (a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase())
                return 1;
            if (a.name.toUpperCase() > b.name.toUpperCase())
                return -1;
            return 0;
        });
    }
};
console.log(myStuff);
function addItem(ev) {
    ev.preventDefault();
    var CAT;
    var itemName;
    var itemInfo;
    var itemPic;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        // console.log(field.type, field.name, field.value, field.checked);
        if (field.type == "text" && field.value == "") {
            alert("You must fill all fields!");
            return;
        }
        else if (field.checked) {
            CAT = field.value;
        }
        else if (field.id == "name") {
            itemName = field.value;
        }
        else if (field.id == "info") {
            itemInfo = field.value;
        }
        else if (field.type == "file") {
            itemPic = "" + URL.createObjectURL(field.files[0]);
        }
    }
    myStuff.addItem(itemName, itemInfo, itemPic, CAT);
    renderPage();
}
function removeItem(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.type == "text") {
            myStuff.removeItem(field.value);
        }
    }
    renderPage();
}
function renderPage() {
    var html = "";
    for (var section in myStuff) {
        if (section == "addItem")
            break;
        html += "<div class=\"wrapper\">";
        for (var item in myStuff[section]) {
            html += "<div class=\"wrapper__card\">\n                        <h3>" + myStuff[section][item].name + "</h3>\n                        <img src=\"" + myStuff[section][item].imgSRC + "\">\n                        <p>" + myStuff[section][item].description + "</p>\n                    </div>";
        }
        html += "</div>";
    }
    document.querySelector("#view").innerHTML = html;
}
renderPage();
document.querySelector('#year_up').addEventListener("click", handleclick);
document.querySelector('#year_down').addEventListener("click", handleclick);
document.querySelector('#name_up').addEventListener("click", handleclick);
document.querySelector('#name_down').addEventListener("click", handleclick);
function handleclick(ev) {
    var id = ev.target.id;
    switch (id) {
        case 'year_up':
            myStuff.arrangeByYearUp();
            break;
        case 'year_down':
            myStuff.arrangeByYearDown();
            break;
        case 'name_up':
            myStuff.arrangeByNameUp();
            break;
        case 'name_down':
            myStuff.arrangeByNameDown();
            break;
    }
    renderPage();
}
// myStuff.arrangeByYear();
