function Submit(ev) {
    ev.preventDefault();
    console.dir(ev);
    var obj = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var content = _a[_i];
        console.log(content.name, content.value);
        if (content.name !== "submit") {
            obj[content.name] = content.value;
        }
    }
    console.log(obj);
}
