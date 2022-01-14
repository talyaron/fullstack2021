function handleSubmit(ev) {
    ev.preventDefault();
    var formObj = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var filed = _a[_i];
        console.dir(filed);
        console.log(filed.name, filed.value);
        if (filed.name !== 'submit')
            formObj[filed.name] = filed.value;
    }
    console.log(formObj);
}
