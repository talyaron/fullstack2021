function Submit(ev) {
    ev.preventDefault();
    var formObj = {};
    console.log(ev);
    var result = document.querySelector('#result');
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.dir(field);
        console.log(field.type, field.name, field.value);
        if (field.name !== 'submit') {
            if (field.type === 'number') {
                formObj[field.name] = field.valueAsNumber;
            }
            else {
                formObj[field.name] = field.value;
            }
        }
    }
    console.log(formObj);
    var weight = formObj.weight;
    var height = formObj.height;
    result.innerHTML = weight / (height * height);
}
