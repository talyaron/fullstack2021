function formInput(ev) {
    ev.preventDefault();
    var formObject = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var i = _a[_i];
        console.log(i.name, i.value);
    }
    console.log(formObject);
}
