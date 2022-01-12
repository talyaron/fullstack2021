function handleSubmit(ev) {
    ev.preventDefault();
    var formObj = {};
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var i = _a[_i];
        console.dir(i);
        console.log(i.name, i.value);
        if (i.name !== 'submit')
            formObj[i.name] = i.value;
    }
    console.log(formObj);
}
