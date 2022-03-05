"use strict";

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

    theHtml(matches);
  });
}

function theHtml(matches) {
  if (matches.length > 0) {
    var html = matches.map(function (match) {
      return "\n        <ul>\n        <li>" + match.name + "</li>\n        </ul>\n        ";
    }).join("");
    matchList.innerHTML = html;
  }
}

search.addEventListener("input", function () {
  return searchCountry(search.value);
});