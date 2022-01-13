function handleSubmit1(ev) {
    ev.preventDefault();
    console.log(ev);
    var formobj = {};
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var botton = _a[_i];
        if (botton.type !== 'submit') {
            formobj[botton.type] = botton.value;
        }
        console.log(formobj);
    }
}
