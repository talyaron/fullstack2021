var fname = document.getElementById('fname');
function createCard(event) {
    // event.preventDefault();
    var formObj = {};
    for (var _i = 0, _a = event.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== 'Submit')
            formObj[field.name] = field.value;
    }
    fname.innerHTML = "" + formObj.name;
}
// fname.innerHTML = formObj[0];
