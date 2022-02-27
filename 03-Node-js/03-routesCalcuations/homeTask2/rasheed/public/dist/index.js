axios.get("/get-users").then(function (_a) {
    var data = _a.data;
});
var search = document.querySelector("search");
var matchList = document.querySelector("match-list");
function searchCountry(searchText) {
    axios.get("/get-users").then(function (_a) {
        var data = _a.data;
        var matches = data.filter(function (country) {
            var regex = new RegExp("" + searchText, "gi");
            return country.name.match(regex);
        });
        if (search.value === "") {
            matches = "";
        }
        console.log(matches);
        //  theHtml(matches)
    });
}
// function theHtml(matches) {
//     if(matches.length > 0){
//         const html = matches.map(match => `
//         <ul>
//         <li>${match.name}</li>
//         </ul>
//         `).join("")
//         matchList.innerHTML = html
//     };
// } 
