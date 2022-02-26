function handleSearch(ev) {
    var searchParagraph = ev.target.value;
    var searchTerm = req;
    var regex = new RegExp(searchTerm, "i");
    var root = document.querySelector(".article_root");
}
function handleRange(ev) {
    filterTerms.price = ev.target.value;
    document.querySelector('#price-show').innerHTML = filterTerms.price + '';
    console.log(filterTerms);
    getFilteredList(filterTerms);
}
function getFilteredList(paragraphs) {
    axios
        .get("get-?terms=" + paragraphs)
        .then(function (_a) {
        var data = _a.data;
        filteredItems = data;
        renderItems(filteredItems);
    });
}
article.forEach(function (paragraph) {
    if (regex.test(paragraph.title)) {
        html += "\n        <div id='paragraph'>\n        </div>\n        ";
    }
});
root.innerHTML = html;
