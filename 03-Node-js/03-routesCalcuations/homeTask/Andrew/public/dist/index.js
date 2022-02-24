var filterTerms = {
    searchByName: "",
    price: 13500,
    category: "all"
};
var filteredItems;
function handleSearch(ev) {
    filterTerms.searchByName = ev.target.value;
    console.log(filterTerms);
    getFilteredList(filterTerms);
}
;
function handleSelector(ev) {
    filterTerms.category = ev.target.value;
    console.log(filterTerms);
    getFilteredList(filterTerms);
}
function handleRange(ev) {
    filterTerms.price = ev.target.value;
    console.log(filterTerms);
    getFilteredList(filterTerms);
}
function getFilteredList(terms) {
    axios
        .get("getList?price=" + terms.price + "&name=" + terms.searchByName + "&category=" + terms.category)
        .then(function (_a) {
        var data = _a.data;
        filteredItems = data;
        renderItems(filteredItems);
    });
}
function renderItems(list) {
    var html = "";
    list.forEach(function (item) {
        html += "<div class='card'>\n                    <h2>" + item.name + "</h2>\n                    <img src='" + item.picUrl + "'>\n                    <h2>" + item.price + " $</h2>\n                    <h4>" + item.category + "</h4>\n                </div>";
    });
    document.querySelector('#main').innerHTML = html;
}
;
// axios
// .get('getMe')
// .then(({data}) => {
//     console.log(data)
// });
