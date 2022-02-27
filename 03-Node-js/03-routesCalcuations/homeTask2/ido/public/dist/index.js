axios.get("/data").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function renderItems() {
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
    axios.get("/searched-list?input=" + inputValue).then(function (_a) {
        var data = _a.data;
    });
}
