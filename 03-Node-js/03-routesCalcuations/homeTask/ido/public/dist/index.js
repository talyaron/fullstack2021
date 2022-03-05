axios.get("/player").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
var btns = document.querySelectorAll('.main_form-btns');
btns.forEach(function (btn) {
    btn.addEventListener('click', displayPlayer);
});
function displayPlayer(ev) {
    ev.preventDefault();
    try {
        var year = ev.target.value;
        var display_1 = document.querySelector('.main_display');
        var html_1 = '';
        if (year) {
            axios.get("/get-player?year=" + year).then(function (_a) {
                var data = _a.data;
                console.log(data);
                html_1 = "<h3 class=\"main_display_playerName\">" + data[0].name + "</h3>\n                <span class=\"main_display-year\">Winner Ballon d'Or in " + data[0].year + " </span><br>\n                <span class=\"main_display-national\">Nationality : " + data[0].nationality + " </span>";
                display_1.style.backgroundImage = "url(" + data[0].url + ")";
                display_1.innerHTML = html_1;
            });
        }
    }
    finally {
    }
}
