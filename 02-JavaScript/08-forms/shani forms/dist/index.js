function handleSubmit(ev) {
    ev.preventDefault();
    var formObj = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.dir(field);
        console.log(field.type, field.name, field.value);
        if (field.type !== 'submit') {
            if (field.type === 'number') {
                formObj[field.name] = field.valueAsNumber;
            }
            else if (field.type === 'radio') {
                if (field.checked) {
                    formObj[field.name] = field.value;
                }
            }
            else {
                formObj[field.name] = field.value;
            }
        }
    }
    console.log(formObj);
}
function bmicalculate(ev) {
    ev.preventDefault();
    var result = document.querySelector('#result');
    var formObj = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        field = _a[_i];
        if (field.name !== 'submit')
            formObj[field.name] = field.value;
    }
    console.log(formObj);
    var mass = formObj.mass;
    var height = formObj.height;
    result.innerHTML = "your BMI is :" + mass / (height * height);
}
