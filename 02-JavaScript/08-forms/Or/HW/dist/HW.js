function handleSumbit(ev) {
    ev.preventDefault();
    var name = document.getElementById('name');
    var userName = document.getElementById('userName');
    var phone = document.getElementById('phone');
    var date = document.getElementById('date');
    var ID = document.getElementById('ID');
    var formobj = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var content = _a[_i];
        console.log(content.name, content.value);
        if (content.name !== "submit") {
            formobj[content.name] = content.value;
        }
    }
    console.log(formobj);
    name.innerHTML = formobj.name;
}
