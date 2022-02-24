axios.get('/muscleCars').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handelSelectCars(ev) {
    try {
        var car = ev.target.value;
        if (car) {
            axios.get("/muscleCars?car=" + car).then(function (_a) {
                var data = _a.data;
                var root = document.querySelector(".car__root");
                var html = '';
                if (Array.isArray(data)) {
                    html += "<img src = '" + data[0].img + "'>\n                    <h2> " + data[0].name + " </h2>\n                    <p> " + data[0].year + " </p>";
                    root.innerHTML = html;
                }
                else {
                    throw new Error('Car doesnt exist');
                }
            });
        }
    }
    catch (err) {
        console.error(err);
    }
}
