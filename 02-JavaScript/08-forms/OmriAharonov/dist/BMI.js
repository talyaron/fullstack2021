var info = {};
function handleSubmit(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var elem = _a[_i];
        if (elem.name !== 'submit')
            info[elem.name] = elem.valueAsNumber;
        //console.dir(elem)
    }
}
function calculateBmi(obj) {
    var calc = (obj.weight / ((obj.height * obj.height) / 100));
}
var result = calculateBmi(info);
document.querySelector('bmi').innerHTML = "" + result;
// console.log(info);
// console.dir(info);
