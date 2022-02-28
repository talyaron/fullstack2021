function handleSearch(ev) {
    try {
        var search = ev.target.value;
        if (!search)
            throw new Error("search in handleSearch");
        axios.get("/googleSearch?search=" + search)
            .then(function (_a) {
            var data = _a.data;
            var root = document.querySelector('#root');
            renderArticles(root, data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderArticles(root, data) {
    try {
        var indexRoot = document.querySelector('#index');
        if (!root)
            throw new Error("root in renderArticles");
        if (!data)
            throw new Error("data in renderArticles");
        var html = '';
        for (var index = 0; index <= data.length; index++) {
            html += "<div class=\"container\">\n      <div class=\"index\">\n      <input type=\"checkbox\"><span>" + (index + 1) + "</span> \n      </div>\n      <div class=\"card\">\n      <h2>" + data[index].title + "</h2>\n      <p>" + data[index].text + "</p>\n      <p>N Engl J Med. " + data[index].year + ";380(26):2518-2528. doi: 10.1056/NEJMoa1903076. Epub 2019 May 20.\n      PMID: 31112379</p>\n      </div>\n      </div>\n      ";
            root.innerHTML = html;
            indexRoot.innerHTML = data.length + '  results';
        }
    }
    catch (error) {
        console.error(error);
    }
}
