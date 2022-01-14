;
function handleSubmit(ev) {
    ev.preventDefault();
    var result = document.querySelector('.bmi');
    var bmi = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var elem = _a[_i];
        if (elem.name !== 'submit')
            bmi[elem.name] = elem.valueAsNumber;
    }
    result.innerHTML = "your BMI is: " + bmi.weight / (((bmi.height) / 100) * ((bmi.height) / 100));
}
