axios.get('/muscleCars').then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handelSelectCars(ev) {
    try {
        var car = ev.target.value;
        // console.log(car)
    }
    catch (err) {
        console.error(err);
    }
}
