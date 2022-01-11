var infoObj = {};
function handleSubmit(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var data = _a[_i];
        if (data.name !== 'submit')
            infoObj[data.name] = data.value;
    }
}
console.log(infoObj);
