axios.get("/player").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function displayPlayer(ev) {
    ev.preventDefault();
    var display = document.querySelector('.main_inputBox');
    var year = ev.target.value;
    console.log(year);
    axios.get("/player?year=" + year).then(function (_a) {
        var data = _a.data;
        console.log(data);
    });
    display.innerHTML += "<span class=\"main_inputBox_input-value\">" + year + "</span>";
}
