var obj = {};
function handleSumbit(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var i = _a[_i];
        // console.dir(i);
        if (i.value !== "send") {
            obj[i.name] = i.value;
        }
    }
    console.dir(obj);
}
