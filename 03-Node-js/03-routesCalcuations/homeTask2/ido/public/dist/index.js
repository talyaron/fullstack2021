axios.get("/data").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function time_setImgs() {
    setInterval(showImgs, 2000);
}
function showImgs() {
    var count = 1;
    var background;
    var ImgsBox = document.querySelector(".main_display");
    axios.get("/changesImgs").then(function (_a) {
        var data = _a.data;
        if (count == 1) {
            background = "url(" + data[0] + ")";
        }
        else if (count == 2) {
            background = "url(" + data[1] + ")";
        }
        else if (count == 3) {
            background = "url(" + data[2] + ")";
        }
        else {
            count = 0;
        }
        ImgsBox.style.background = "url(" + background + ")";
        count++;
    });
}
function renderAllItems() {
    var display = document.querySelector('.main_display');
    var html = '';
    axios.get("/data").then(function (_a) {
        var data = _a.data;
        data.forEach(function (item) {
            html += "<div class=\"main_display-card\">\n        <img class=\"main_display-card-img\" src=\"" + item.picUrl + "\" alt=\"Avatar\" style=\"width:100%\">\n        <div class=\"main_display-card-details\">\n          <h4 class=\"main_display-card-details-title detailsInCard\"><b>" + item.title + "</b><br>\n            <span class=\"main_display-card-details-description detailsInCard\">" + item.description + "</span></h4> \n          <p class=\"main_display-card-details-price detailsInCard\">$" + item.price + "</p>\n        </div>\n      </div>";
        });
        display.innerHTML = html;
    });
}
function displayByInput(ev) {
    var display = document.querySelector('.main_display');
    var dataList = document.querySelector('.main_header-search-dataList');
    var html = '';
    var inputValue = ev.target.value;
    axios.get("/searched-data?input=" + inputValue).then(function (_a) {
        var data = _a.data;
        data.forEach(function (item) {
            html += "<div class=\"main_display-card\">\n      <img class=\"main_display-card-img\" src=\"" + item.picUrl + "\" alt=\"Avatar\" style=\"width:100%\">\n      <div class=\"main_display-card-details\">\n        <h4 class=\"main_display-card-details-title detailsInCard\"><b>" + item.title + "</b><br>\n          <span class=\"main_display-card-details-description detailsInCard\">" + item.description + "</span></h4> \n        <p class=\"main_display-card-details-price detailsInCard\">$" + item.price + "</p>\n      </div>\n    </div>";
        });
        display.innerHTML = html;
    });
}
