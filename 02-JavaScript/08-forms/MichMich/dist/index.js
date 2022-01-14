console.log("hi");
function handlesubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.dir(field);
    }
}
