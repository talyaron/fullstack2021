function handleSubmit(ev) {
    ev.preventDefault();
    var formObj = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.dir(field);
        console.log(field.type, field.name, field.value);
        if (field.name !== 'submit')
            formObj[field.name] = field.value;
    }
    console.log(formObj);
}
