var info = {};
function handleSubmit(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var elem = _a[_i];
        if (elem.name !== 'submit')
            info[elem.name] = elem.valueAsNumber;
        console.dir(elem);
    }
    console.dir(info);
    var hei = info['weight'];
    var wei = info['height'];
    console.log(hei);
    console.log(wei);
}
