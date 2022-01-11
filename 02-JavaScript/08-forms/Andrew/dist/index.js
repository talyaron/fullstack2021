function handleSumbit(ev) {
    ev.preventDefault();
    var result = document.querySelector('#result');
    var formObj = {};
    // console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        // console.dir(field)
        // console.log(field.name ,field.value)
        if (field.name !== 'submit')
            formObj[field.name] = field.value;
    }
    console.log(formObj);
    var mass = formObj.mass;
    var height = formObj.height;
    result.innerHTML = "your BMI is :" + mass / (height * height);
}
